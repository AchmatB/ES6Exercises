using HardwareStore.Models;
using System.Collections.Generic;

namespace HardwareStore.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAll();
        Product Get(int id);
        Product Add(Product restaurant);
    }
}
