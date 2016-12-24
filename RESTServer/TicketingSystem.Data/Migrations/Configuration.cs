namespace TicketingSystem.Data.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;

    public class Configuration : DbMigrationsConfiguration<TicketingSystemContext>
    {
        private const string AdminRole = "Administrator";
        private const string InspectorRole = "Inspector";
        private const string DefaultPassword = "password";

        public Configuration()
        {
            this.AutomaticMigrationsEnabled = true;
            this.AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(TicketingSystemContext context)
        {
            var userManager = new UserManager<User>(new UserStore<User>(context));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            if (context.Roles.Count() == 0)
            {
                this.AddRolesIfNotExist(roleManager, AdminRole, InspectorRole);
            }

            if (context.Users.Count() == 0)
            {
                const string DefaultLastName = "Admin";
                const decimal DefaultBalance = 300;
                ICollection<User> defaultAdmins = new List<User>();
                defaultAdmins.Add(new User() { UserName = "admin", Email = "admin@email.com", FirstName = "Angular", LastName = DefaultLastName, Balance = DefaultBalance });
                defaultAdmins.Add(new User() { UserName = "John", Email = "test@email.com", FirstName = "John", LastName = DefaultLastName, Balance = DefaultBalance });
                defaultAdmins.Add(new User() { UserName = "batman", Email = "bat@email.com", FirstName = "Bruce", LastName = DefaultLastName, Balance = DefaultBalance });

                this.AddAdminsIfNotExist(userManager, defaultAdmins);
            }
        }

        private void AddRolesIfNotExist(RoleManager<IdentityRole> roleManager, params string[] roles)
        {
            foreach (string roleName in roles)
            {
                if (!roleManager.RoleExists(roleName))
                {
                    IdentityResult result = roleManager.Create(new IdentityRole(roleName));
                    this.ValidateResult(result);
                }
            }
        }

        private void AddAdminsIfNotExist(UserManager<User> userManager, IEnumerable<User> users)
        {
            foreach (User currentUser in users)
            {
                if (userManager.FindByName(currentUser.UserName) == null)
                {
                    IdentityResult result = userManager.Create(currentUser, DefaultPassword);
                    this.ValidateResult(result);
                    IdentityResult addToRoleResult = userManager.AddToRole(currentUser.Id, AdminRole);
                    this.ValidateResult(result);
                }
            }
        }

        private void ValidateResult(IdentityResult result)
        {
            if (!result.Succeeded)
            {
                string message = string.Join(", ", result.Errors);
                throw new InvalidOperationException(message);
            }
        }
    }
}
