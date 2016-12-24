using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TicketingSystem.Data.Models
{
    public class Comment
    {
        [Key]
        public int Id
        { get; set; }

        public string Content
        { get; set; }

        public DateTime CreatedOn
        { get; set; }

        public virtual User User
        { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public virtual News News
        { get; set; }

        [ForeignKey("News")]
        public int NewsId { get; set; }
    }
}