namespace TicketingSystem.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using TicketingSystem.Data.Constants;

    public class Comment
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(DataModelConstants.StringLongMaxLength)]
        public string Content { get; set; }

        public string AuthorId { get; set; }

        public virtual User Author { get; set; }

        public int NewsItemId { get; set; }

        public virtual News NewsItem { get; set; }
    }
}
