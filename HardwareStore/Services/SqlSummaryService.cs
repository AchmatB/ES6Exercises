using System.Collections.Generic;
using System.Linq;
using HardwareStore.Models;
using HardwareStore.Data;

namespace HardwareStore.Services
{
    public class SqlSummaryService : ISummaryService
    {
        private readonly ProductDbContext _context;

        public SqlSummaryService(ProductDbContext context)
        {
            _context = context;
        }

        public ProductSummary Add(ProductSummary productSummary)
        {
            _context.ProductSummary.Add(productSummary);
            _context.SaveChanges();
            return productSummary;
        }

        public ProductSummary Get(int id)
        {
            return _context.ProductSummary.FirstOrDefault(r => r.Id == id);
        }

        public IEnumerable<ProductSummary> GetAll()
        {
            return _context.ProductSummary.OrderBy(r => r.Category);
        }

      
    }
}