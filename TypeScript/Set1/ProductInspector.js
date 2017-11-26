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
        let result;
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
                result += {
                    product: productDetails[i].product,
                    category: productDetails[i].category,
                    subcategory: productDetails[i].subCategory,
                    price: productDetails[i].price,
                    stock: productDetails[i].stock,
                    profit: productDetails[i].profit,
                    dateAdded: productDetails[i].dateAdded
                };
            }
        }
        return result;
    }
    static countProductDuplicates(data) {
        let result;
        let copyOfData = data;
        let matchCounter = 0;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < copyOfData.length; j++) {
                if (copyOfData[j].product.includes(data[i].product)) {
                    matchCounter++;
                }
            }
            if (matchCounter > 1) {
                result += {
                    product: data[i].product,
                    duplicateCount: matchCounter
                };
            }
            matchCounter = 0;
        }
        //console.log("dupicates: "+ JSON.stringify(rows));
        return result;
    }
}
exports.ProductInspector = ProductInspector;
//# sourceMappingURL=ProductInspector.js.map