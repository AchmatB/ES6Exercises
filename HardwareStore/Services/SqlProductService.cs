using System.Collections.Generic;
using System.Linq;
using HardwareStore.Models;
using HardwareStore.Data;
using Microsoft.EntityFrameworkCore;

namespace HardwareStore.Services
{
    public class SqlProductService : IProductService
    {
        private readonly ProductDbContext _context;
        string text1 = 
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
        convert.t
        public Product Update(int id)
        {

           
                tbl_FormCollectionUse Tbl = new tbl_FormCollectionUse();
                //  
                Tbl.Name = Fc["TxtName"].ToString();
                Tbl.Mobile = Convert.ToInt64(Fc["Mobile"]);
                Tbl.EmailID = Fc["TxtEmailID"].ToString();
                Tbl.Address = Fc["TxtAddress"].ToString();
                //  
                objContext.AddTotbl_FormCollectionUse(Tbl);
                //  
                int i = objContext.SaveChanges();
                if (i > 0)
                {
                    ViewBag.Msg = "Data Saved Suuceessfully.";
                }
            

            //_Name=F  
            return View();

            var productModel = _context.Products.First(r => r.Id == id);

            _context.Entry(productModel).State = EntityState.Modified;
            _context.SaveChanges();

            return productModel;
        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Products.OrderBy(r => r.Id);
        }
    }
}