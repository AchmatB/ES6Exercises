"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductInspector {
    // Your Exercise 5-9 code here
    //https://www.youtube.com/watch?v=Wl98eZpkp-c&t=496s
    static listAdjustedCostBysubcategory(data, category, subcategory, inflationPercentage) {
        const filteredProducts = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory);
        });
        //console.log("filtered - " +JSON.stringify(filteredProducts));
        const price = filteredProducts.reduce((sum, product) => sum + product.price, 0);
        // console.log("price - "+JSON.stringify(price));
        const profit = filteredProducts.reduce((sum, product) => sum + product.profit, 0);
        // console.log("profit - " +JSON.stringify(profit));
        const stock = filteredProducts.reduce((sum, product) => sum + product.stock, 0);
        //console.log("stock - " +JSON.stringify(stock));
        const sales = filteredProducts.reduce((sum, product) => sum + product.sales, 0);
        //console.log("sales - " +JSON.stringify(sales));
        const costOfStock = ((price * sales) - profit) / stock;
        //console.log("cost - " +JSON.stringify(costOfStock));
        const costOfStockWithInflation = costOfStock + (costOfStock * (inflationPercentage / 100));
        //console.log("adjustedCost - " +JSON.stringify(costOfStockWithInflation));
        let result = filteredProducts.map(i => ({
            category: category,
            subcategory: subcategory,
            costOfStock: costOfStock,
            costOfStockWithInflation: costOfStockWithInflation
        }));
        return result;
    }
    static listMissingProductLines(productDetails, productSummary) {
        var temp;
        let rows;
        for (let i = 0; i < productDetails.length; i++) {
            var matchCounter = 0;
            for (let j = 0; j < productSummary.length; j++) {
                if (productSummary[j].category.includes(productDetails[i].category)) {
                    if (productSummary[j].subCategory.includes(productDetails[i].subCategory)) {
                        matchCounter++;
                        break;
                    }
                }
            }
            if (matchCounter < 1) {
                //look into how to add more, as += does not work
                rows = {
                    product: productDetails[i].product,
                    category: productDetails[i].category,
                    subcategory: productDetails[i].subCategory,
                    price: productDetails[i].price,
                    stock: productDetails[i].stock,
                    profit: productDetails[i].profit,
                    dateAdded: productDetails[i].dateAdded
                };
                console.log("mapped - " + JSON.stringify(rows));
            }
        }
        console.log("mapped but not - " + JSON.stringify(rows));
        return rows;
    }
}
exports.ProductInspector = ProductInspector;
//# sourceMappingURL=ProductInspector.js.map