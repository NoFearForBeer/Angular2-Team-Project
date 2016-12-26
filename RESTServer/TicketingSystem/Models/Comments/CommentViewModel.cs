﻿using System;

using TicketingSystem.Models.Users;

namespace TicketingSystem.Models.Comments
{
    public class CommentViewModel
    {
        public string Content { get; set; }

        public UserResponseModel Author { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}