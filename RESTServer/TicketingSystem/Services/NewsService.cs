using System;
using System.Collections.Generic;

using TicketingSystem.Data.Models;

namespace TicketingSystem.Services
{
    public class NewsService : INewsService
    {
        private readonly ICollection<News> news;

        public NewsService(ICollection<News> news)
        {
            this.news = news;
        }

        public News Create(string title, string content)
        {
            News news = new News();
            news.CreatedOn = DateTime.Now;
            news.Title = title;
            news.Content = content;

            return news;
        }

        public ICollection<News> getAll()
        {
            return this.news;
        }
    }
}
