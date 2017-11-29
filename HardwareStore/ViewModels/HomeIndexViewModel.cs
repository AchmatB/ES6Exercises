using HardwareStore.Models;
using System.Collections.Generic;

namespace HardwareStore.ViewModels
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public IEnumerable<ProductSummary> ProductSummaries { get; set; }
        public string CurrentMessage { get; set; }
    }
}
