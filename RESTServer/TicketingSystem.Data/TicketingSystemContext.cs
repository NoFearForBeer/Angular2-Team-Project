namespace TicketingSystem.Data
{
    using System.Data.Entity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using TicketingSystem.Data.Models;

    public class TicketingSystemContext : IdentityDbContext<User>, ITicketingSystemContext
    {
        public TicketingSystemContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public virtual IDbSet<Ticket> Tickets { get; set; }

        public virtual IDbSet<Transport> Transports { get; set; }

        public static TicketingSystemContext Create()
        {
            return new TicketingSystemContext();
        }
    }
}
