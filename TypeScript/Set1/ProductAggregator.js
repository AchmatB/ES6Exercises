"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductAggregator {
    static listProductTotalsBySubcategory(data, category, subcategory) {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");
        let filtered = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory);
        });
        let IProductTotal = filtered.map(i => ({ category: i.category, subcategory: i.subCategory, total: 0 }));
        const filteredTotal = IProductTotal.filter(i => {
            for (const product of IProductTotal) {
                if (product.category.includes(i.category) && product.subcategory.includes(i.subcategory)) {
                    i.total++;
                }
            }
            return true;
        });
        //let test =  filtered.reduce((total, sales) =>{
        //if(total.subCategory === sales.subCategory)
        // {
        // total.sales += sales.sales;
        //}
        //return total;
        //});
        //let IProductTotal =  {category: filtered[0].category, subcategory: filtered[0].subCategory, total:1};
        return IProductTotal;
    }
}
exports.ProductAggregator = ProductAggregator;
class ProductAggregator2 {
    static listTotalSalesByCategory(data, category) {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");
        let filtered = data.filter(value => {
            return value.category.includes(category);
        });
        let IProductTotal = filtered.map(i => ({ category: i.category, subcategory: i.subCategory, total: 0 }));
        const filteredTotal = IProductTotal.reduce((total, sales) => {
            if (total.subcategory === sales.subcategory) {
                total.total += sales.total;
            }
            return total;
        });
        return IProductTotal;
    }
}
exports.ProductAggregator2 = ProductAggregator2;
//# sourceMappingURL=ProductAggregator.js.map