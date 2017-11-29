using HardwareStore.Models;
using Microsoft.AspNetCore.Mvc;
using HardwareStore.Services;
using HardwareStore.ViewModels;

namespace HardwareStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductService _productService;
        private readonly IGreeter _greeter;

        public HomeController(IProductService productService,
                              IGreeter greeter)
        {
            _productService = productService;
            _greeter = greeter;
        }

        public IActionResult Index()
        {
            var model = new HomeIndexViewModel();
            model.Products = _productService.GetAll();
            model.CurrentMessage = _greeter.GetMessageOfTheDay();

            return View(model);
        }

        public IActionResult Details(int id)
        {
            var model = _productService.Get(id);
            if(model == null)
            {
                return RedirectToAction(nameof(Index));
            }
            return View(model);
        }

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

                newProduct = _productService.Add(newProduct);

                return RedirectToAction(nameof(Details), new { id = newProduct.Id });
            }
            else
            {
                return View();
            }
        }
    }
}
