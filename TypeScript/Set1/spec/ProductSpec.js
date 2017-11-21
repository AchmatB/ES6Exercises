"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = require("../ProductInspector");
// Examples
// describe("Products", function(): any  
// {
//   it("summary should not be empty", function(): any 
//   {
//     let result : IProductSummaryLine[] = ObjectMothers.productSummaryData;
//     expect(result.length).toBe(19);
//   });
//   it("detail should not be empty", function(): any 
//   {
//     let result : IProductDetailLine[] = ObjectMothers.productData;
//     expect(result.length).toBe(100);
//   });
// });
// Your tests
describe("ProductInspector", function () {
    // it("list product totals by subcategory should not be empty", function(): any 
    // {
    //   let data : IProductDetailLine[] = ObjectMothers.productData;
    //   let result : IProductTotal[] = PA.ProductAggregator.listProductTotalsBySubcategory(data, "DIY", "Electrical");
    //   expect(result.length).toBeGreaterThan(0);
    //   // Add more test criteria 
    // });
    //   it("list product totals by category should not be empty", function(): any 
    //   {
    //     let data : IProductDetailLine[] = ObjectMothers.productData;
    //     let result : IProductTotal[] = PA.ProductAggregator.listTotalSalesByCategory(data, "DIY");
    //     expect(result.length).toBeGreaterThan(0);
    //     // Add more test criteria 
    // });
    it("list adjusted cost by subcategory", function () {
        let test = PI.ProductInspector.listAdjustedCostBysubcategory("DIY", "Cordless", 10);
        // Add more test criteria 
    });
});
//# sourceMappingURL=ProductSpec.js.map