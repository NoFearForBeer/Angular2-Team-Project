using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TicketingSystem.Models.Tickets;

namespace TicketingSystem.Models.Users
{
    public class UserViewModel : UserResponseModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public byte[] Avatar { get; set; }

        public IEnumerable<TicketResponseModel> Tickets { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}