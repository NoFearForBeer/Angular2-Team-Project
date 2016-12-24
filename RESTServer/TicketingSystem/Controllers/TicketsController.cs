using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

using Microsoft.AspNet.Identity;

using TicketingSystem.Data;
using TicketingSystem.Data.Models;
using TicketingSystem.Models;
using TicketingSystem.Services;

namespace TicketingSystem.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/Tickets")]
    public class TicketsController : ApiController
    {
        const decimal TicketPriceForHour = 1.6m;
        private ITicketingSystemContext context;
        ITicketService ticketService;

        public TicketsController(ITicketingSystemContext context, ITicketService ticketService)
        {
            this.context = context;
            this.ticketService = ticketService;
        }

        public TicketsController()
            : this(new TicketingSystemContext(), new TicketService())
        {
        }
        
        [HttpPost]
        [Authorize]
        [Route("Buy")]
        public IHttpActionResult Buy(TickteBuyModel model)
        {
            int hours = model.Hours;
            string currentUserId = this.User.Identity.GetUserId();
            User user = this.context.Users.FirstOrDefault(u => u.Id == currentUserId);
            
            decimal ticketPrice = (TicketPriceForHour * hours);
            
            // get discount for +2 hours
            if (hours > 1)
            {
                ticketPrice = ticketPrice - (ticketPrice / 20);
            }

            if (user.Balance - ticketPrice < 0)
            {
                return this.BadRequest(string.Format("Not enough money! Ticked price: {0}. Your balance: {1}", ticketPrice, user.Balance));
            }

            Ticket ticket = this.ticketService.Create(hours, ticketPrice);
            user.Balance -= ticketPrice;
            user.Tickets.Add(ticket);
            context.SaveChanges();

            return this.Created("/", new
            {
                QRCode = ticket.QRCode,
                Cost = ticketPrice
            });
        }
    }
}
