using System.Data.Entity;

using Microsoft.AspNet.Identity.EntityFramework;

using TicketingSystem.Data.Models;

namespace TicketingSystem.Data
{
    public class TicketingSystemContext : IdentityDbContext<User>, ITicketingSystemContext
    {
        public TicketingSystemContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public virtual IDbSet<Ticket> Tickets { get; set; }

        public virtual IDbSet<Transport> Transports { get; set; }

        public virtual IDbSet<Comment> Comments { get; set; }

        public virtual IDbSet<News> News { get; set; }

        public static TicketingSystemContext Create()
        {
            return new TicketingSystemContext();
        }
    }
}
