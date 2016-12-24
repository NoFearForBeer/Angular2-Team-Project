namespace TicketingSystem.Data
{
    using System.Data.Entity;
    using TicketingSystem.Data.Models;

    public interface ITicketingSystemContext
    {
        IDbSet<Ticket> Tickets { get; set; }

        IDbSet<Transport> Transports { get; set; }

        IDbSet<User> Users { get; set; }

        int SaveChanges();
    }
}
