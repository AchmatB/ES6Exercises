// TODO: import interfaces needed by this class
import { IProductDetailLine } from "./IProductDetailLine"
import { IProductTotal } from "./IProductTotal"
import { IProductSummaryLine } from "./IProductSummaryLine";

export class ProductAggregator {
    public static listProductTotalsBySubcategory(data: IProductDetailLine[], category: string, subcategory: string) : IProductTotal[] {
        // Your Exercise 3 code here
        console.log("We have a new ProductAggregator");

        let filtered = data.filter(value => { 
        return value.category.includes(category) && value.subCategory.includes(subcategory);
        });

        let result =  filtered.map(i=> ( {category: i.category, subcategory: i.subCategory, total: 0}));
        
        const filteredTotal = result.filter(i => {
            for(const product of result)
            {
                if(product.category.includes(i.category) && product.subcategory.includes(i.subcategory))
                {
                    i.total ++;
                }		
            }
            return true;
        });
    
        return result;
    }

    public static listTotalSalesByCategory(data: IProductDetailLine[], category: string) : IProductTotal[] {
    // Your Exercise 3 code here
    console.log("We have a new ProductAggregator");
    
    let filtered = data.filter(value => { 
        return value.category.includes(category);
    });
    
    let result =  filtered.map(i=> ( {category: i.category, subcategory: i.subCategory, total:0}));
    const filteredTotal =  result.reduce((total, sales) =>{
		if(total.subcategory === sales.subcategory)
		{
			total.total += sales.total;
		}
		return total;
	});
    
    return result;

    }
}