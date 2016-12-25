using System;
using System.Linq;
using System.Linq.Expressions;
using TicketingSystem.Data.Models;
using TicketingSystem.Models.Tickets;
using TicketingSystem.Models.Users;

namespace TicketingSystem.Models
{
    public static class ExpressionMappings
    {
        private static Expression<Func<Ticket, TicketResponseModel>> ticketExpression = ticket => new TicketResponseModel
        {
            Id = ticket.Id.ToString(),
            BoughtAt = ticket.BoughtAt,
            Cost = ticket.Cost,
            Expired = ticket.DateActivated.HasValue && ticket.ExpiresOn.HasValue && DateTime.Now > ticket.ExpiresOn.Value,
            DateActivated = ticket.DateActivated,
            Activated = ticket.DateActivated.HasValue,
            ExpiresOn = ticket.ExpiresOn,
            Duration = ticket.DurationInHours,
            QRCode = ticket.QRCode,
            Owner = new UserResponseModel
            {
                UserName = ticket.Owner.UserName,
                FullName = ticket.Owner.FirstName + " " + ticket.Owner.LastName,
                Id = ticket.Owner.Id,
            }
        };

        private static Expression<Func<User, UserViewModel>> userExpression = user => new UserViewModel()
        {
            Email = user.Email,
            FirstName = user.FirstName,
            FullName = user.FirstName + " " + user.LastName,
            Tickets = user.Tickets.AsQueryable().Select(ticketExpression),
            LastName = user.LastName,
            UserName = user.UserName,
            Id = user.Id,
        };

        private static Expression<Func<News, NewsCreateModel>> newsExpression = news => new NewsCreateModel() {
            Title = news.Title,
            Content = news.Content,
        };

        public static IQueryable<TicketResponseModel> MapTicketsToViewModels(this IQueryable<Ticket> tickets)
        {
            return tickets.Select(ticketExpression);
        }

        public static TicketResponseModel MapTicketToViewModel(this Ticket ticket)
        {
            if (ticket == null)
            {
                return null;
            }

            return ticketExpression.Compile().Invoke(ticket);
        }

        public static IQueryable<UserViewModel> MapUsersToViewModels(this IQueryable<User> users)
        {
            return users.Select(userExpression);
        }

        public static UserViewModel MapUserToViewModel(this User user)
        {
            if (user == null)
            {
                return null;
            }

            return userExpression.Compile().Invoke(user);
        }

        public static IQueryable<NewsCreateModel> MapNewsToViewModels(this IQueryable<News> news)
        {
            return news.Select(newsExpression);
        }

    }
}