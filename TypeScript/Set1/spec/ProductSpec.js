"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectMothers = require("./ObjectMothers");
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
    it("summary should not be empty", function () {
        let data = ObjectMothers.productData;
        let result = PA.ProductAggregator.listProductTotalsBySubcategory(data, "DIY", "Electrical");
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
    it("summary should not be empty", function () {
        let data = ObjectMothers.productData;
        let result = PA.ProductAggregator.listTotalSalesByCategory(data, "DIY");
        expect(result.length).toBeGreaterThan(0);
        // Add more test criteria 
    });
});
//# sourceMappingURL=ProductSpec.js.map