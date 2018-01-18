using System.Collections.Generic;
using System.Linq;
using HardwareStore.Models;
using HardwareStore.Data;

namespace HardwareStore.Services
{
    public class SqlProductService : IProductService
    {
        private readonly ProductDbContext _context;

        public SqlProductService(ProductDbContext context)
        {
            _context = context;
        }

        public Product Add(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return product;
        }

        public Product Save(Product product)
        {
            _context.Products.Update(product);
            _context.SaveChanges();
            return product;
        }

        public Product Get(int id)
        {
            return _context.Products.FirstOrDefault(r => r.Id == id);
        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Products.OrderBy(r => r.Id);
        }
    }
}