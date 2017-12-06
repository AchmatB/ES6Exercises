using HardwareStore.Models;
using System.Collections.Generic;

namespace HardwareStore.Services
{
    public interface ISummaryService
    {
        IEnumerable<ProductSummary> GetAll();
        ProductSummary Get(int id);
        ProductSummary Add(ProductSummary restaurant);
    }
}
