using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TicketingSystem.Models
{
    public class TickteBuyModel
    {
        [Required]
        [Range(1, 3000, ErrorMessage = "The hours should be greater than 0")]
        public int Hours { get; set; }
    }
}