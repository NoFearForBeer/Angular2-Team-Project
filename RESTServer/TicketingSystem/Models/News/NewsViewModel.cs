using System;
using System.Collections.Generic;
using System.Linq;
using TicketingSystem.Data.Models;
using TicketingSystem.Models.Comments;

namespace TicketingSystem.Models.NewsModels
{
    public class NewsViewModel
    {
        public NewsViewModel()
        {
        }

        public NewsViewModel(News news)
        {
            this.Id = news.Id;
            this.Title = news.Title;
            this.Content = news.Content;
            this.CreatedOn = news.CreatedOn;
            this.Comments = news.Comments.AsQueryable();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime CreatedOn { get; set; }

        public IEnumerable<Comment> Comments { get; set; }
    }
}