// TODO: import interfaces needed by this class
import { IProductDetailLine } from "./IProductDetailLine"
import { IExercise5 } from "./IExercise5"
import * as ObjectMothers from "./spec/ObjectMothers"

export class ProductInspector {
    // Your Exercise 5-9 code here

    //https://www.youtube.com/watch?v=Wl98eZpkp-c&t=496s
    public static listAdjustedCostBysubcategory(category : string, subcategory : string, inflationPercentage : number)
    {
       
        const data : IProductDetailLine[] = ObjectMothers.productData; 
        
        const filteredProducts = data.filter(value => { 
            return value.category.includes(category) && value.subCategory.includes(subcategory);
            });
    
        //console.log("filtered - " +JSON.stringify(filteredProducts));
    
            const price = filteredProducts.reduce((sum, product)=> sum + product.price,0);
            console.log("price - "+JSON.stringify(price));

            const profit = filteredProducts.reduce((sum, product)=> sum + product.profit,0);
            console.log("profit - " +JSON.stringify(profit));

            const stock = filteredProducts.reduce((sum, product)=> sum + product.stock,0);
            console.log("stock - " +JSON.stringify(stock));

            const sales = filteredProducts.reduce((sum, product)=> sum +product.sales,0);
            console.log("sales - " +JSON.stringify(sales));
    
        const costOfStock = ((price * sales) - profit) /stock;
        console.log("cost - " +JSON.stringify(costOfStock));
        const costOfStockWithInflation = costOfStock + (costOfStock * (inflationPercentage / 100));
        console.log("adjustedCost - " +JSON.stringify(costOfStockWithInflation));
        
        let values: IExercise5 = {
            
                        category: category,
                        subcategory: subcategory,
                        costOfStock: costOfStock,
                        costOfStockWithInflation: costOfStockWithInflation
                    };

        console.log("final - " +JSON.stringify(values));
        return values;
    }








}