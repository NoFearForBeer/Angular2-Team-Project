using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicketingSystem.Data.Models
{
    public class Transport
    {
        private ICollection<Ticket> tickets;

        public Transport()
        {
            this.tickets = new HashSet<Ticket>();
        }

        // It is string because - it can be 10TM s
        public string LineNumber { get; set; }

        public TransportType TransportType { get; set; }

        public ICollection<Ticket> Tickets
        {
            get { return this.tickets; }
            set { this.tickets = value; }
        }

        [Key]
        public int Id { get; set; }
    }
}
