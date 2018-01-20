using HardwareStore.Models;
using Microsoft.AspNetCore.Mvc;
using HardwareStore.Services;
using HardwareStore.ViewModels;
using HardwareStore.Data;
using HardwareStore.Views.Home.Details;
using System;

namespace HardwareStore.Controllers
{
    public class HomeController : Controller
    {

        private readonly ProductDbContext _updateContext;
        private readonly ISummaryService _summaryService;
        private readonly IProductService _productService;
        private readonly IGreeter _greeter;

        public HomeController(ISummaryService summaryService,
                              IProductService productService,
                              IGreeter greeter)
        {
            _summaryService = summaryService;
            _productService = productService;
            _greeter = greeter;
        }

        public IActionResult Index()
        {
            var model = new HomeIndexViewModel();
            model.ProductSummary = _summaryService.GetAll();
            model.Products = _productService.GetAll();
            model.CurrentMessage = _greeter.GetMessageOfTheDay();

            return View(model);
        }

        public IActionResult Details(int id)
        {
            var productModel = _productService.Get(id);
         
            if (productModel == null)
            {
                return RedirectToAction(nameof(Index));
            }
            
            return View(productModel);
        }

       [HttpPost]
        public IActionResult Update(ProductEditModel id)
        {

            string test = Convert.ToString(Request["txtAmount"].ToString());

            var productModel = _context.Products.FirstOrDefault(r => r.Id == id);
    

            if (productModel == null)
            {
                return RedirectToAction(nameof(Index));
            }

            productModel.Name = "Test";
            

            
            return View(productModel);
        }

       
        //public IActionResult Update(ProductEditModel model)
        //{
      
        
        //    return View(model);
        //}

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(ProductEditModel model)
        {
            if (ModelState.IsValid)
            {
                var newProduct = new Product();
                newProduct.Name = model.Name;
                // TODO: Add the rest of the fields

               // newProduct = _productService.Add(newProduct);

                return RedirectToAction(nameof(Details), new { id = newProduct.Id });
            }
            else
            {
                return View();
            }
        }
    }
}