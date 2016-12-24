using System.Collections.Generic;
using TicketingSystem.Data.Models;

namespace TicketingSystem.Services
{
    public interface INewsService
    {
        News Create(string Name, string Content);

        ICollection<News> getAll();
    }
}