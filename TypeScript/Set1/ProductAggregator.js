"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductAggregator {
    static listProductTotalsBySubcategory(data, category, subcategory) {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");
        let filtered = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory) && value.sales;
        });
        console.log("Start");
        console.log(filtered);
        console.log("End");
        // TODO: Replace this
        //
        return new Array();
    }
}
exports.ProductAggregator = ProductAggregator;
// Your Exercise 4 code here 
//# sourceMappingURL=ProductAggregator.js.map