using System.Linq;

namespace TicketingSystem.Data.Repositories
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> All();

        void Add(T entity);

        T Find(object id);

        void Update(T entity);

        T Delete(T entity);

        T Delete(object id);

        int SaveChanges();
    }
}
