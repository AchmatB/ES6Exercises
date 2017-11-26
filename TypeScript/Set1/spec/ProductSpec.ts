import { IProductSummaryLine } from "../IProductSummaryLine";
import { IProductDetailLine } from "../IProductDetailLine";
import { IProductTotal } from "../IProductTotal";
import { IAdjustedCostBySubcategory } from "../IAdjustedCostBySubcategory";

import * as Exercises from "../exercises";
import * as ObjectMothers from "./ObjectMothers"

import * as PI from "../ProductInspector"
import * as PA from "../ProductAggregator"
import { ICountDuplicate } from "../IDuplicateCount";

// Examples
describe("Products", function(): any  
{
  it("summary should not be empty", function(): any 
  {
    let result : IProductSummaryLine[] = ObjectMothers.productSummaryData;
 
    expect(result.length).toBe(19);
  });
  it("detail should not be empty", function(): any 
  {
    let result : IProductDetailLine[] = ObjectMothers.productData;
  
    expect(result.length).toBe(100);
  });
});

// Your tests
describe("ProductInspector", function(): any  
{
  it("list product totals by subcategory should not be empty", function(): any 
  {
    let data : IProductDetailLine[] = ObjectMothers.productData;
    let result : IProductTotal[] = PA.ProductAggregator.listProductTotalsBySubcategory(data, "DIY", "Electrical");
 
    expect(result.length).toBeGreaterThan(0);
    // Add more test criteria 
  });
    it("list product totals by category should not be empty", function(): any 
    {
      let data : IProductDetailLine[] = ObjectMothers.productData;
      let result : IProductTotal[] = PA.ProductAggregator.listTotalSalesByCategory(data, "DIY");
   
      expect(result.length).toBeGreaterThan(0);
      // Add more test criteria 
  });

  it("list adjusted cost by subcategory", function(): any 
  {
    let data : IProductDetailLine[] = ObjectMothers.productData;
    let result : IAdjustedCostBySubcategory[]  = PI.ProductInspector.listAdjustedCostBysubcategory(data, "DIY", "Cordless", 10);
    expect(result.length).toBeGreaterThan(0);
    // Add more test criteria 
  });

  it("list missing product lines", function(): any 
  {
    let productSummary : IProductSummaryLine[] = ObjectMothers.productSummaryData;
    let productDetails : IProductDetailLine[] = ObjectMothers.productData;
    
    let result : IProductDetailLine [] = PI.ProductInspector.listMissingProductLines(productDetails, productSummary);
  
    expect(result.length).toBeGreaterThan(0);
    // Add more test criteria 
  });

  it("Count duplicates", function(): any 
  {
  
    let productDetails : IProductDetailLine[] = ObjectMothers.productData;
    
    let result : ICountDuplicate [] = PI.ProductInspector.countProductDuplicates(productDetails);
 
    expect(result.length).toBeGreaterThan(0);
    // Add more test criteria 
  });
 

});
