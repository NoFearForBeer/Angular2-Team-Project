using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

using TicketingSystem.Data.Models;

namespace TicketingSystem.Data.Migrations
{
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

                var user1 = new User() {
                    UserName = "admin",
                    Email = "admin@email.com",
                    FirstName = "Angular",
                    LastName = DefaultLastName,
                    Balance = DefaultBalance
                };
                var user2 = new User() {
                    UserName = "John",
                    Email = "test@email.com",
                    FirstName = "John",
                    LastName = DefaultLastName,
                    Balance = DefaultBalance
                };
                var user3 = new User() {
                    UserName = "batman",
                    Email = "bat@email.com",
                    FirstName = "Bruce",
                    LastName = DefaultLastName,
                    Balance = DefaultBalance
                };

                ICollection<User> defaultAdmins = new List<User>();
                defaultAdmins.Add(user1);
                defaultAdmins.Add(user2);
                defaultAdmins.Add(user3);
                defaultAdmins.Add(user3);

                this.AddAdminsIfNotExist(userManager, defaultAdmins);
            }

            if (context.News.Count() == 1)
            {
                var news1 = new News() {
                    Title = "ЗА КОЛЕДНИТЕ И НОВОГОДИШНИ ПРАЗНИЦИ",
                    Content = "На 24, 25, 26 и 31.12.2016г. и на 01 и 02.01.2017 г.превозните средстващеработят попразнични разписания, като на 01 и 02.01.2017 г.ще се намалят допълнително коли по трамвайни линии № 5, 6 и 20 и по тролейбусни линии  № 2, 4, 5 и 9.",
                    CreatedOn = new DateTime(2016, 12, 20)
                };

                var news2 = new News() {
                    Title = "ПРАЗНИЧЕН НОВОГОДИШЕН КОНЦЕРТ „СЦЕНА ПОД ЗВЕЗДИТЕ“",
                    Content = "Във връзка с провеждане на Празничен Новогодишен концерт „Сцена под звездите“ се забранява престоят и паркирането на пътни превозни средства, както следва: От 06:00 часа на 28.12.2016 г.до 06:00 часа на 02.01.2017 г.на пл. „Княз Александър I“ между ул. „Княз Александър I“ и ул. „Дякон Игнатий“; От 21:00 часа на 29.12.2016 г.до 06:00 часа на 01.01.2017 г.на ул. „Дякон Игнатий“ между бул. „Цар Освободител“ и ул. „Аксаков“ и на ул. „Дякон Игнатий“ от страната на градинката срещу ул. „Аксаков“; От 08:00 часа на 31.12.2016 г.до 06:00 часа на 01.01.2017 г.на паркинга между Националната художествена галерия и сградата на Народно събрание 2;",
                    CreatedOn = new DateTime(2016, 12, 21)
                };

                context.News.Add(news1);
                context.News.Add(news2);
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
