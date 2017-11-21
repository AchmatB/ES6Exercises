"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductAggregator {
    static listProductTotalsBySubcategory(data, category, subcategory) {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");
        let filtered = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory);
        });
        let result = filtered.map(i => ({ category: i.category, subcategory: i.subCategory, total: 0 }));
        const filteredTotal = result.filter(i => {
            for (const product of result) {
                if (product.category.includes(i.category) && product.subcategory.includes(i.subcategory)) {
                    i.total++;
                }
            }
            return true;
        });
        return result;
    }
    static listTotalSalesByCategory(data, category) {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");
        let filtered = data.filter(value => {
            return value.category.includes(category);
        });
        let result = filtered.map(i => ({ category: i.category, subcategory: i.subCategory, total: 0 }));
        const filteredTotal = result.reduce((total, sales) => {
            if (total.subcategory === sales.subcategory) {
                total.total += sales.total;
            }
            return total;
        });
        return result;
    }
}
exports.ProductAggregator = ProductAggregator;
//# sourceMappingURL=ProductAggregator.js.map