"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectMothers = require("./ObjectMothers");
const PI = require("../ProductInspector");
const PA = require("../ProductAggregator");
// Examples
describe("Products", function () {
    it("summary should not be empty", function () {
        let result = ObjectMothers.productSummaryData;
        expect(result.length).toBe(19);
    });
    it("detail should not be empty", function () {
        let result = ObjectMothers.productData;
        expect(result.length).toBe(100);
    });
});
// Your tests
describe("ProductInspector", function () {
    it("list product totals by subcategory should not be empty", function () {
        let data = ObjectMothers.productData;
        let result = PA.ProductAggregator.listProductTotalsBySubcategory(data, "DIY", "Electrical");
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
    it("list product totals by category should not be empty", function () {
        let data = ObjectMothers.productData;
        let result = PA.ProductAggregator.listTotalSalesByCategory(data, "DIY");
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
    it("list adjusted cost by subcategory", function () {
        let data = ObjectMothers.productData;
        let result = PI.ProductInspector.listAdjustedCostBysubcategory(data, "DIY", "Cordless", 10);
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
    it("list missing product lines", function () {
        let productSummary = ObjectMothers.productSummaryData;
        let productDetails = ObjectMothers.productData;
        let result = PI.ProductInspector.listMissingProductLines(productDetails, productSummary);
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
    it("Count duplicates", function () {
        let productDetails = ObjectMothers.productData;
        let result = PI.ProductInspector.countProductDuplicates(productDetails);
        console.log("dups -" + JSON.stringify(result));
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
});
//# sourceMappingURL=ProductSpec.js.map