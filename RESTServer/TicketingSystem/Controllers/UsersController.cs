using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TicketingSystem.Data;
using TicketingSystem.Models;
using TicketingSystem.Models.Users;

namespace TicketingSystem.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        private ITicketingSystemContext context;
        

        public UsersController(ITicketingSystemContext context)
        {
            this.context = context;
        }

        public UsersController()
            : this(new TicketingSystemContext())
        {
        }

        [HttpGet]
        public IHttpActionResult All()
        {
            IEnumerable<UserViewModel> userModels = this.context.Users.MapUsersToViewModels().ToList();
            return this.Json(userModels);
        }
    }
}
