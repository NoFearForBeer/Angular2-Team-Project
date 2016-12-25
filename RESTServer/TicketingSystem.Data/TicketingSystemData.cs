using ITicktingSystem.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TicketingSystem.Data.Models;
using TicketingSystem.Data.Repositories;

namespace TicketingSystem.Data
{
    public class TicketingSystemData : ITicktingSystemData
    {
        private DbContext context;
        private Dictionary<Type, object> repositories;

        public TicketingSystemData(TicketingSystemContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }

        public IRepository<Comment> Comments
        {
            get { return this.GetRepository<Comment>(); }
        }
        public IRepository<News> News
        {
            get { return this.GetRepository<News>(); }
        }
        public IRepository<Ticket> Tickets
        {
            get { return this.GetRepository<Ticket>(); }
        }
        public IRepository<Transport> Transports
        {
            get { return this.GetRepository<Transport>(); }
        }
        public IRepository<User> Users
        {
            get { return this.GetRepository<User>(); }
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var typeOfRepository = typeof(T);
            if (!this.repositories.ContainsKey(typeOfRepository))
            {
                var newRepository = Activator.CreateInstance(typeof(EFRepository<T>), context);
                this.repositories.Add(typeOfRepository, newRepository);
            }

            return (IRepository<T>)this.repositories[typeOfRepository];
        }

        public int SaveChanges()
        {
            return this.context.SaveChanges();
        }
    }
}
