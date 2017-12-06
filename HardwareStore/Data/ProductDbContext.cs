using HardwareStore.Models;
using Microsoft.EntityFrameworkCore;

namespace HardwareStore.Data
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductSummary> ProductSummary { get; set; }
    }
}
