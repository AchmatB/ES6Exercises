using System.Linq;
using System.Threading;
using HardwareStore.Data;
using HardwareStore.Models;
using HardwareStore.Services;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Should;

namespace HardwareStoreTests
{
    public class SqlTests
    {
        private ProductDbContext _productDbContext;

        public SqlTests()
        {
            InitContext();
        }

        private void InitContext()
        {
            var builder = new DbContextOptionsBuilder<ProductDbContext>()
                .UseSqlServer("Server=.;Database=HardwareStore;Trusted_Connection=True;MultipleActiveResultSets=true");
            var context = new ProductDbContext(builder.Options);
            _productDbContext = context;
        }

        [Fact]
        public void GetAll_Products_ShouldLoad()
        {
            var svc = new SqlProductService(_productDbContext);
            var result = svc.GetAll();

            result.Count().ShouldBeGreaterThan(0);
            
        }
    }
}
