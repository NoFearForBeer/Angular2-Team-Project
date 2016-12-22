using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TicketingSystem.Data.Models;

namespace TicketingSystem.Data
{
    public interface ITicketingSystemContext
    {
        IDbSet<Ticket> Tickets { get; set; }

        IDbSet<Transport> Transports { get; set; }

        IDbSet<User> Users { get; set; }

        int SaveChanges();
    }
}
