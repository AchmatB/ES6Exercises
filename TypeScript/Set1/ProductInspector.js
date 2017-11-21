"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectMothers = require("./spec/ObjectMothers");
class ProductInspector {
    // Your Exercise 5-9 code here
    static listAdjustedCostBysubcategory(category, subcategory, inflationPercentage) {
        //Gets the rows
        const data = ObjectMothers.productData;
        const filteredProducts = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory);
        });
        //console.log("filtered - " +JSON.stringify(filteredProducts));

        const price = filteredProducts.reduce((total, sum) => total + sum.price, 0);
        console.log("price - " + JSON.stringify(price));
        const profit = filteredProducts.reduce((total, sum) => total + sum.profit, 0);
        console.log("profit - " + JSON.stringify(profit));
        const stock = filteredProducts.reduce((total, sum) => total + sum.stock, 0);
        console.log("stock - " + JSON.stringify(stock));
        const sales = filteredProducts.reduce((total, sum) => total + sum.sales, 0);
        console.log("sales - " + JSON.stringify(sales));
        const cost = ((price * sales) - profit) / stock;
        console.log("cost - " + JSON.stringify(cost));
        const adjustedCost = cost + (cost * (inflationPercentage / 100));
        console.log("adjustedCost - " + JSON.stringify(adjustedCost));
        let values = {
            category: category,
            subcategory: subcategory,
            costOfStock: cost,
            costOfStockWithInflation: adjustedCost
        };
        console.log("final - " + JSON.stringify(values));
        return values;
    }
}
exports.ProductInspector = ProductInspector;
//# sourceMappingURL=ProductInspector.js.map