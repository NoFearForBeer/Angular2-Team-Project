using TicketingSystem.Data.Models;
using TicketingSystem.Data.Repositories;

namespace ITicktingSystem.Data
{
    public interface ITicktingSystemData
    {
        IRepository<Comment> Comments { get; }
        IRepository<News> News { get; }
        IRepository<Ticket> Tickets { get; }
        IRepository<Transport> Transports { get; }
        IRepository<User> Users { get; }
        int SaveChanges();
    }
}
