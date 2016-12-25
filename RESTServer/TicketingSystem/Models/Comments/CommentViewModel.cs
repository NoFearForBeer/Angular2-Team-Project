using System;

using TicketingSystem.Models.Users;

namespace TicketingSystem.Models.Comments
{
    public class CommentViewModel
    {
        public string Content { get; set; }

        public UserViewModel Author { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}