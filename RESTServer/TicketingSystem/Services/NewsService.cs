using System;
using System.Collections.Generic;

using TicketingSystem.Data.Models;

namespace TicketingSystem.Services
{
    public class NewsService : INewsService
    {
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
            throw new NotImplementedException();
        }
    }
}
