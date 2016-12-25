using System;
using System.Web.Http;
using System.Web.Http.Cors;

using TicketingSystem.Data;
using TicketingSystem.Data.Models;
using TicketingSystem.Models;
using TicketingSystem.Services;

namespace TicketingSystem.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/News")]
    public class NewsController : ApiController
    {
        private ITicketingSystemContext context;
        INewsService newsService;

        public NewsController(ITicketingSystemContext context, INewsService newsService)
        {
            this.context = context;
            this.newsService = newsService;
        }

        public NewsController()
            : this(new TicketingSystemContext(), new NewsService())
        {
        }
        
        [HttpPost]
        [Authorize]
        [Route("Create")]
        public IHttpActionResult Buy(NewsCreateModel model)
        {
            News news = this.newsService.Create(model.Title, model.Content);
            news.CreatedOn = DateTime.Now;
            context.SaveChanges();

            return Ok();
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return GetAll();
        }
    }
}
