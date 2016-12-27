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

        public string FileName { get; set; }

        public string FileExtension
        {
            get
            {
                int index = this.FileName.LastIndexOf(".");
                if (index < 0)
                {
                    return string.Empty;
                }

                return this.FileName.Substring(index + 1);
            }
        }

        public IEnumerable<TicketResponseModel> Tickets { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}