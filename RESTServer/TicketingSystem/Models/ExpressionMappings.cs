using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TicketingSystem.Data.Models;
using TicketingSystem.Models.Tickets;
using TicketingSystem.Models.Users;

namespace TicketingSystem.Models
{
    public static class ExpressionMappings
    {
        public static IQueryable<TicketResponseModel> MapToViewModels(this IQueryable<Ticket> tickets)
        {
            return tickets.Select(c => new TicketResponseModel
            {
                Id = c.Id.ToString(),
                BoughtAt = c.BoughtAt,
                Cost = c.Cost,
                Expired = c.DateActivated.HasValue && c.ExpiresOn.HasValue && DateTime.Now > c.ExpiresOn.Value,
                DateActivated = c.DateActivated,
                Activated = c.DateActivated.HasValue,
                ExpiresOn = c.ExpiresOn,
                Duration = c.DurationInHours,
                QRCode = c.QRCode,
                Owner = new UserResponseModel
                {
                    UserName = c.Owner.UserName,
                    FullName = c.Owner.FirstName + " " + c.Owner.LastName,
                    Id = c.Owner.Id,
                }
            });
        }

        public static TicketResponseModel MapToViewModel(this Ticket ticket)
        {
            return new TicketResponseModel
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
        }
    }
}