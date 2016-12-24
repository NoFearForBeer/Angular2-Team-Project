namespace TicketingSystem.Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using TicketingSystem.Data.Constants;

    public class News
    {
        private ICollection<Comment> comments;

        public News()
        {
            this.comments = new HashSet<Comment>();
        }

        [Key]
        public int Id { get; set; }

        [MinLength(DataModelConstants.StringMinLength)]
        [MaxLength(DataModelConstants.StringShortMaxLength)]
        public string Title { get; set; }

        [MinLength(DataModelConstants.StringMinLength)]
        [MaxLength(DataModelConstants.StringLongMaxLength)]
        public string Content { get; set; }

        [MaxLength(DataModelConstants.StringShortMaxLength)]
        public string AutorId { get; set; }

        public virtual User Author { get; set; }

        public virtual ICollection<Comment> Comments
        {
            get { return this.comments; }
            set { this.comments = value; }
        }
    }
}
