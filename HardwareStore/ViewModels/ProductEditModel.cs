using System.ComponentModel.DataAnnotations;

namespace HardwareStore.ViewModels
{
    public class ProductEditModel
    {
        [Required, MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Category { get; set; }

        [MaxLength(50)]
        public string Subcategory { get; set; }

        public string UnitPrice { get; set; }
    }
}
