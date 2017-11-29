using System;

namespace HardwareStore.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public decimal UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public int UnitsSold { get; set; }
        public decimal ProfitYtd { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
