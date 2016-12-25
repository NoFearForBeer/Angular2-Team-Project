using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using TicketingSystem.Data;
using TicketingSystem.Data.Models;
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

        [HttpGet]
        [Route("ById")]
        public IHttpActionResult ById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return this.BadRequest("Id cannot be null or empty");
            }

            User user = this.context.Users.Find(id);

            if (user == null)
            {
                return this.BadRequest("Cannot find user with id: " + id);
            }

            return this.Json(user.MapUserToViewModel());
        }

        [HttpPost]
        public IHttpActionResult Create(RegisterBindingModel registerUserModel)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            User userCreateModel = new User()
            {
                Email = registerUserModel.Email,
                FirstName = registerUserModel.FirstName,
                LastName = registerUserModel.LastName,
                UserName = registerUserModel.UserName,
            };

            UserManager<User> userManager = this.GetUserManager();
            IdentityResult result = userManager.Create(userCreateModel, registerUserModel.Password);
            if (!result.Succeeded)
            {
                return this.BadRequest(string.Join(" ", result.Errors));
            }
            
            UserResponseModel responseModel = this.context.Users.Find(userCreateModel.Id).MapUserToViewModel();
            return this.Created("/", responseModel);
        }

        [HttpPut]
        public IHttpActionResult Update(UpdateUserModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            UserManager<User> userManager = this.GetUserManager();
            User user = userManager.FindById(model.Id);

            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.UserName = model.UserName;
            user.Email = model.Email;

            IdentityResult result = userManager.Update(user);
            if (!result.Succeeded)
            {
                return this.BadRequest(string.Join(" ", result.Errors));
            }

            return this.Ok();
        }

        [HttpDelete]
        public IHttpActionResult Delete(UserDeleteModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            UserManager<User> userManager = this.GetUserManager();

            User userToDelete = userManager.FindById(model.Id);
            if (userToDelete == null)
            {
                return this.BadRequest("Cannot find user with id: " + model.Id);
            }

            IdentityResult result = userManager.Delete(userToDelete);

            if (!result.Succeeded)
            {
                return this.BadRequest(string.Join(" ", result.Errors));
            }

            return this.Ok();
        }

        private UserManager<User> GetUserManager()
        {
            UserManager<User> userManager = new UserManager<User>(new UserStore<User>(this.context as DbContext));
            userManager.UserValidator = new UserValidator<User>(userManager) { AllowOnlyAlphanumericUserNames = false, RequireUniqueEmail = true };

            return userManager;
        }
    }
}
