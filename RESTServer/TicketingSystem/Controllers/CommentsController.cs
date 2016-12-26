using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

using TicketingSystem.Data;
using TicketingSystem.Data.Models;
using TicketingSystem.Models;
using TicketingSystem.Models.Comments;
using TicketingSystem.Providers;
using TicketingSystem.Services;

namespace TicketingSystem.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/comments")]
    public class CommentsController : ApiController
    {
        private ITicketingSystemContext context;

        public CommentsController(ITicketingSystemContext context)
        {

            this.context = context;
        }

        public CommentsController() : this( new TicketingSystemContext())
        {
        }


        [HttpGet]
        public IHttpActionResult GetAll()
        {
            IEnumerable<CommentViewModel> c = this.context.Comments.MapCommentsToViewModels().ToList();
            return this.Json(c);
        }

        [HttpGet]
        [Route("a")]
        public IHttpActionResult GetByNewsId(int id)
        {
            IEnumerable<CommentViewModel> comment = this.context.Comments.MapCommentsToViewModels().ToList().Where(c => c.NewsItemId == id);


            return this.Json(comment);
        }
        
        //[Authorize]
        //[HttpPost]
        //public IHttpActionResult PostComment(CommentViewModel comment)
        //{
        //    if (comment != null && this.ModelState.IsValid)
        //    {
        //        var databaseComment = new Comment {
        //            Content = comment.Content,
        //            newsId = comment.newsI,
        //            Author = this.CurrentUser
        //        };

        //        var post = this.posts.GetById(comment.PostId);
        //        if (post == null)
        //        {
        //            throw new HttpException(404, "Post not found");
        //        }

        //        post.Comments.Add(databaseComment);
        //        this.posts.Update();

        //        var viewModel = this.Mapper.Map<CommentViewModel>(databaseComment);
        //        return this.PartialView("_CommentPartial", viewModel);
        //    }

        //    throw new HttpException(400, "Invalid comment!");
        //}


    }
}
