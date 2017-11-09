// TODO: import interfaces needed by this class
import { IProductDetailLine } from "./IProductDetailLine"
import { IProductTotal } from "./IProductTotal"


export class ProductAggregator {
    public static listProductTotalsBySubcategory(data: IProductDetailLine[], category: string, subcategory: string) : IProductTotal[] {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");

        let filtered = data.filter(value => {
            return value.category.includes(category) && value.subCategory.includes(subcategory);
        });
        
        
        console.log("Start");
        console.log(filtered);
        console.log("End");

        // TODO: Replace this
        //
        return new Array<IProductTotal>();
    }

    public static listTotalSalesByCategory(data: IProductDetailLine[], category: string) : IProductTotal[] {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");

        let filtered = data.filter(value => {
            return value.category.includes(category);
        });
        
        
        console.log("Start");
        console.log(filtered);
        console.log("End");

        // TODO: Replace this
        //
        return new Array<IProductTotal>();
    }
}



// Your Exercise 4 code here