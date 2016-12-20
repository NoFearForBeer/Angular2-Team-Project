using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicketingSystem.Data.Models
{
    public class Ticket
    {
        public Ticket()
        {
            this.Id = Guid.NewGuid();
            this.BoughtAt = DateTime.UtcNow;
        }

        [Key]
        public Guid Id { get; set; }

        public byte[] QRCode { get; set; }

        public DateTime BoughtAt { get; set; }

        public DateTime? DateActivated { get; set; }
        
        public int DurationInHours { get; set; }

        public DateTime? ExpiresOn { get; set; }

        public virtual User Owner { get; set; }

        public string OwnerId { get; set; }

        public virtual Transport Transport { get; set; }

        // Do we need each ticket to be for a transport while the passenger can use the whole public transport
        public int? TransportId { get; set; }

        // Expired = this.BoughtAt.AddHours(this.Duration) > ExpiresOn 
        // Line
    }
}
