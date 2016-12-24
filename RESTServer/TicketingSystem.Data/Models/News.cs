using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TicketingSystem.Data.Models
{
    public class News
    {
        private ICollection<Comment> comments;

        public News()
        {
            this.comments = new HashSet<Comment>();
        }

        [Key]
        public int Id
        { get; set; }

        public string Title
        { get; set; }

        public string Content
        { get; set; }

        public DateTime CreatedOn
        { get; set; }

        public ICollection<Comment> Comments
        {
            get { return this.comments; }
            set { this.comments = value; }
        }
    }
}
