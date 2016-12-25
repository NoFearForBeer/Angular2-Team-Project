namespace TicketingSystem.Controllers
{
    using ITicktingSystem.Data;
    using System.Web.Http;

    public class BaseApiController : ApiController
    {
        protected ITicktingSystemData data;

        public BaseApiController(ITicktingSystemData data)
        {
            this.data = data;
        }
    }
}