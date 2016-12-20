using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using TicketingSystem.Data.Models;

namespace TicketingSystem.Data
{
    public class TicketingSystemContext : IdentityDbContext<User>
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
