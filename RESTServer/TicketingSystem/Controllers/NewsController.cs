using ITicktingSystem.Data;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

using TicketingSystem.Data;
using TicketingSystem.Data.Models;
using TicketingSystem.Models;
using TicketingSystem.Models.NewsModels;
using TicketingSystem.Services;

namespace TicketingSystem.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/news")]
    public class NewsController : ApiController
    {
        private ITicketingSystemContext context;

        public NewsController(ITicketingSystemContext context)
        {
            this.context = context;
        }

        public NewsController()
            : this(new TicketingSystemContext())
        {
        }



        [HttpGet]
        public IHttpActionResult All()
        {
            IEnumerable<NewsViewModel> newsViewModels = this.context.News.MapNewsToViewModels().ToList();
            return this.Json(newsViewModels);
        }
    }
}
