import { IProductSummaryLine } from "../IProductSummaryLine";
import { IProductDetailLine } from "../IProductDetailLine";
import { IProductTotal } from "../IProductTotal";

import * as Exercises from "../exercises";
import * as ObjectMothers from "./ObjectMothers"

import * as PI from "../ProductInspector"
import * as PA from "../ProductAggregator"

// Examples
describe("Products", function(): any  {
  it("summary should not be empty", function(): any {
    let result : IProductSummaryLine[] = ObjectMothers.productSummaryData;
 
    expect(result.length).toBe(19);
  });
  it("detail should not be empty", function(): any {
    let result : IProductDetailLine[] = ObjectMothers.productData;
  
    expect(result.length).toBe(100);
  });
});

// Your tests
describe("ProductInspector", function(): any  {
  it("summary should not be empty", function(): any {
    let data : IProductDetailLine[] = ObjectMothers.productData;
    let result : IProductTotal[] = PA.ProductAggregator.listProductTotalsBySubcategory(data, "DIY", "Electrical");
 
    expect(result.length).toBeGreaterThan(0);
    // Add more test criteria 
  });
    it("summary should not be empty", function(): any {
      let data : IProductDetailLine[] = ObjectMothers.productData;
      let result : IProductTotal[] = PA.ProductAggregator.listTotalSalesByCategory(data, "DIY");
   
      expect(result.length).toBeGreaterThan(0);
      // Add more test criteria 
  });
});
