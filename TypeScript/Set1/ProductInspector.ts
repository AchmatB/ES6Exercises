// TODO: import interfaces needed by this class
import { IProductDetailLine } from "./IProductDetailLine";
import { IProductSummaryLine } from "./IProductSummaryLine";
import { IAdjustedCostBySubcategory } from "./IAdjustedCostBySubcategory";
import { ICountDuplicate } from "./IDuplicateCount";

export class ProductInspector {
    // Your Exercise 5-9 code here

    //https://www.youtube.com/watch?v=Wl98eZpkp-c&t=496s
    public static listAdjustedCostBysubcategory(data: IProductDetailLine[], category : string, subcategory : string, inflationPercentage : number) : IAdjustedCostBySubcategory[]
    {
               
        const filteredProducts = data.filter(value => { 
            return value.category.includes(category) && value.subCategory.includes(subcategory);
            });
    
        //console.log("filtered - " +JSON.stringify(filteredProducts));
    
            const price = filteredProducts.reduce((sum, product)=> sum + product.price,0);
           // console.log("price - "+JSON.stringify(price));

            const profit = filteredProducts.reduce((sum, product)=> sum + product.profit,0);
           // console.log("profit - " +JSON.stringify(profit));

            const stock = filteredProducts.reduce((sum, product)=> sum + product.stock,0);
            //console.log("stock - " +JSON.stringify(stock));

            const sales = filteredProducts.reduce((sum, product)=> sum +product.sales,0);
            //console.log("sales - " +JSON.stringify(sales));
    
        const costOfStock = ((price * sales) - profit) /stock;
        //console.log("cost - " +JSON.stringify(costOfStock));
        const costOfStockWithInflation = costOfStock + (costOfStock * (inflationPercentage / 100));
        //console.log("adjustedCost - " +JSON.stringify(costOfStockWithInflation));
        
        let result =  filteredProducts.map(i=> ( { 
            
            category: category,
            subcategory: subcategory,
            costOfStock: costOfStock,
            costOfStockWithInflation: costOfStockWithInflation}));
            
            
        return result;
    }


    public static listMissingProductLines(productDetails: IProductDetailLine[], productSummary: IProductSummaryLine[]) :IProductDetailLine[]
    {
        var temp;
        let rows;
        for(let i = 0; i < productDetails.length; i++)
        {
            var matchCounter = 0;
        
            for(let j = 0; j < productSummary.length; j++)
            {
                if(productSummary[j].category.includes(productDetails[i].category))
                {
                    if(productSummary[j].subCategory.includes(productDetails[i].subCategory))
                    {
                        matchCounter++;
                        break;
                    }
                }
            }
            if(matchCounter < 1)
            {
                
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
                    
                }
            }  
           
            return rows;   
        }

        public static countProductDuplicates(data : IProductDetailLine[]) : ICountDuplicate[]
        {

            let rows;
            let dataSet2 = data;
            var matchCounter = 0;
            for(let i = 0; i < data.length; i++)
            {
                for(let j = 0; j < dataSet2.length; j++)
                {
                    //console.log("printer - "+ JSON.stringify(print));
                    if(dataSet2[j].product.includes(data[i].product))
                    {
                        matchCounter++;
                    }
                }
                if(matchCounter > 1)
                {
                   
                   let rows = { 
                        product: data[i],
                        duplicateCount : matchCounter
                    };
                  // console.log("dupicates: "+ JSON.stringify(rows));
                    
                }
                matchCounter = 0;
            }
            
            return rows;
        }                
     
    }
