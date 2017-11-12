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

        let IProductTotal =  filtered.map(i=> ( {category: i.category, subcategory: i.subCategory, total: 0}));
        
        const filteredTotal = IProductTotal.filter(i => {
            for(const product of IProductTotal)
            {
                if(product.category.includes(i.category) && product.subcategory.includes(i.subcategory))
                {
                    i.total ++;
                }		
                
            }
            return true;
        });
    
               
        //let IProductTotal =  {category: filtered[0].category, subcategory: filtered[0].subCategory, total:1};
        
        return IProductTotal;
    }
    
}
export class ProductAggregator2 {
    public static listTotalSalesByCategory(data: IProductDetailLine[], category: string) : IProductTotal[] {
    // Your Exercise 3 code here
    console.log("We have a new ProductAggregator");
    
    let filtered = data.filter(value => { 
        return value.category.includes(category);
    });
    
    let IProductTotal =  filtered.map(i=> ( {category: i.category, subcategory: i.subCategory, total:0}));
    const filteredTotal =  IProductTotal.reduce((total, sales) =>{
		if(total.subcategory === sales.subcategory)
		{
			total.total += sales.total;
		}
		return total;
	});
    
   return IProductTotal;

}
}