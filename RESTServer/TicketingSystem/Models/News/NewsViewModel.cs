using System;
using System.Collections.Generic;
using TicketingSystem.Data.Models;
using TicketingSystem.Models.Comments;

namespace TicketingSystem.Models.NewsModels
{
    public class NewsViewModel
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime CreatedOn { get; set; }

        public IEnumerable<Comment> Comments { get; set; }
    }
}