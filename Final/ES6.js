/* General 
The exercises require you to use ES 6 to query the tables for data, write results to the console. 
•	Don’t edit the <table> elements directly in your editor.  
•	Don’t use external JS frameworks at this point.
•	Write a function for each exercise.  Even if we change the data, the function must still work.
•	The function must always return a result, even if just an empty array i.e. never null or undefined		
*/


/* Exercise 1
Using the data from the Product Detail table, write to the console the number of products in each category.  
Write a function that returns an Array of Objects.  Each Object has 2 properties:
•	category
•	total

Example:
listProductTotalsByCategory()

If you have 2 categories, your function could return 
[
	{ category : "Construction", total : 5 },
	{ category : "DIY", total : 3 }
]

Loop through the Array to log each category and total to the console.
*/

var ProductSummaryArray = returnProductSummaryArray();
var ProductDetailArray = returnProductDetailArray();

function returnProductSummaryArray()
{
	//Gets the product summary table by index 0(which is the first table)
	var productSummary = document.getElementsByTagName('table')[0];
	var productSummaryRow = productSummary.getElementsByTagName('tr');
	
	var array=[];

	for(let i = 1; i < productSummaryRow.length; i++) //begin at 1 because 0 returns the headers
	{
		var temp = [];

		temp = {
				category: 	productSummaryRow[i].children[0].innerHTML,
				subcategory:productSummaryRow[i].children[1].innerHTML,
				sales: 		parseFloat(productSummaryRow[i].children[2].innerHTML)//used parseFloat to account for decimal values
				};

		array.push(temp);//inserts temp into the array
	}
	
	return array
	
}

function returnProductDetailArray()
{
	//Gets the product detail table by index 1(which is the second table)
	var productDetail = document.getElementsByTagName('table')[1];
	var productDetailRow = productDetail.getElementsByTagName('tr');

	var array=[];

	for(let i = 1; i < productDetailRow.length; i++)//begin at 1 because 0 returns the headers
	{
		var temp = [];

		temp = {
				product: 	productDetailRow[i].children[0].innerHTML,
				category: 	productDetailRow[i].children[1].innerHTML,
				subcategory:productDetailRow[i].children[2].innerHTML,
				price: 		parseFloat(productDetailRow[i].children[3].innerHTML),//used parseFloat to account for decimal values
				stock: 		parseFloat(productDetailRow[i].children[4].innerHTML),
				sales: 		parseFloat(productDetailRow[i].children[5].innerHTML),
				profit:		parseFloat(productDetailRow[i].children[6].innerHTML),
				dateAdded: 	productDetailRow[i].children[7].innerHTML
				};
 
	array.push(temp);//inserts temp into the array

	}
	
	return array
}


function listProductTotalsByCategory()
{
	productDetail = ProductDetailArray;
	var print = [];
	for(let i = 0; i < productDetail.length; i++)
	{
		var counter;
		for(let j = 0; j < print.length; j++)
		{
			if(print[j].category.includes(productDetail[i].category))
			{
				print[j].Total++;//increments amount of total each time it finds a match
				counter++;
			}
		}
		if(counter < 1)
		{
			var temp = [];
				temp = {
						category: productDetail[i].category,
						"Total" : 1+1};

			print.push(temp);
		}
		counter = 0;
	}
	for(let i = 0; i <print.length; i++)
	{
		console.log(print[i]);
	}
}


/* Exercise 2
Using the data from the Product Detail table, write to the console the total sales for each subcategory in a given category.
Write a function that takes a category parameter and returns an Array of Objects.  Each Object has 3 properties:
•	category
•	subcategory
•	totalSales

Example:
listTotalSalesByCategory("DIY")

could return
[
	{ category : "DIY", subcategory : "Accessories", totalSales : 4234 },
	{ category : "DIY", subcategory : "Pneumatic", totalSales : 2546 },
	{ category : "DIY", subcategory : "Electrical", totalSales : 7478 }
]

Loop through the Array to log each category, subcategory and total sales to the console.			
*/

function listTotalSalesByCategory(Category = "DIY") // <-assign preferred category here
{
	products = ProductDetailArray;
	var print = [];
	

	for(let i = 0; i < products.length; i++)
	{
		if(products[i].category.includes(Category))//if product array with the index of i includes the parameter, enter statement
		{
			var counter = 0;
			
			for(let j = 0; j < print.length; j++)
			{
				if(print[j].subcategory.includes(products[i].subcategory))
				{
					print[j].sales = print[j].sales + products[i].sales;
					counter ++;
				}
			}
			if(counter < 1)//upon first match, add first entry, loop again and find all linked sales
			{
				var temp = [];
				
				temp = {
						category: products[i].category,
						subcategory: products[i].subcategory,
						sales : products[i].sales
						};
				print.push(temp);
			}
		}
	}

	//console.log(print)

	for(let i = 0; i < print.length; i++)
	{
		console.log(print[i])
	}
	
}



/* Exercise 3
Write a function to calculate the cost of the stock on hand per subcategory.
Cost is the Price - Profit * Stock
Then for each subcategory add a new column to show an inflation increase of x% (supplied as a parameter)

Example:
listAdjustedCostBySubcategory(category, subcategory, 10)

may return
{ category: "DIY", subcategory : "Electrical", costOfStock : 100, costOfStockWithInflation: 110 }

Write the result to the console
*/

function listAdjustedCostBySubcategory(Category = "Framing", Subcategory = "Accessories", InflationPercentage = 10)// <-assign preferred category here
{
	products = ProductDetailArray;
	
	var costPrice;
	var costPlusInflation;

	var profitxstock;
	var CalculationVariables;
	var print = [];

	
	for(let i = 0; i < products.length; i++)
	{
		if(products[i].category.includes(Category))
		{
			if(products[i].subcategory.includes(Subcategory))
			{
				if(CalculationVariables == null)
				{
					//gathers required fields
					CalculationVariables = 
					{
						category: products[i].category,
						subcategory: products[i].subcategory,
						price: products[i].price,
						stock: products[i].stock,
						profit: products[i].profit
					};
				}
				else
				{
					CalculationVariables.price += products[i].price;
					CalculationVariables.stock += products[i].stock;
					CalculationVariables.profit += products[i].profit;
				}
			}
		}
	}
	costPrice = CalculationVariables.price - (CalculationVariables.profit * CalculationVariables.stock);
	costPlusInflation = costPrice + (costPrice * (InflationPercentage/100));
	
	var temp = [];

	temp = {Category: CalculationVariables.category, Subcategory: CalculationVariables.subcategory, 
		"cost of stock": costPrice," cost of stock with inflation": costPlusInflation};
	print.push(temp);
	
	console.log(print);
}


/* Exercise 4
There are inconsistencies between the Product Detail and the Product Summary data on the HTML document.  
Write a function that returns the subcategories with incorrect sales totals.  List them in the console.

Example:
listInconsistentSalesTotals()

Construction / Electrical reports an incorrect sales total of 59972.  The correct figure is 61022.
DIY / Accessories reports an incorrect sales total of 18279.  The correct figure is 21042.
*/

function listInconsistentSalesTotals()
{
	productDetails = ProductDetailArray;
	productSummary = ProductSummaryArray;
	var print = [];
	

	for(let i = 0; i < productSummary.length; i++)
	{
		var sales = 0;
		for(let k = 0; k < productDetails.length; k++)
		{	
			if(productDetails[k].category.includes(productSummary[i].category))//if product array with the index of i includes the parameter, enter statement
			{
				if(productDetails[k].subcategory.includes(productSummary[i].subcategory))//checks if subcategory matches
				{
					sales = productDetails[k].sales + sales;
					
				}
			}
		}
		if(sales !== productSummary[i].sales)
		{
			//productDetails[k].sales += productDetails[k].sales;
			//var temp = [];
			//temp = {productSummary[i].category+" / "+productSummary[i].subcategory+ "reports an incorrect sales total of "+productSummary[i].sales+". The correct figure is:"+sales};
			//print.push(temp)
			console.log(productSummary[i].category+" / "+productSummary[i].subcategory+ " reports an incorrect sales total of "+productSummary[i].sales+". The correct figure is: "+sales)
			
		}
	}	
}




/* Exercise 5
There are inconsistencies between the Product Detail and the Product Summary data on the HTML document.  
Write a function that returns the Product Detail rows for which there are no corresponding rows in the Product Summary table.  
Write them as comma separated values (CSV) to the console.

Example:
listMissingProductLines()

"Buffalo Tools Pro Series 12 Piece Router Bit Set", "Woodworking", "Accessories", 860.95, 495, 2119, 482080.92, 2015-07-13
"Hitachi 18 V Ni-cad Cordless Driver Drill", "Construction", "Cordless", 797.81, 8056, 2814, 367250.09, 2014-10-11
*/



function listMissingProductLines()
{
  
	for(let i = 0; i < ProductDetailArray.length; i++)
	{
		var matchCounter = 0;
	
		for(let j = 0; j < ProductSummaryArray.length; j++)
		{
			//if prodSum1.cat = prodDetail1.cat AND prodSum1.sub = prodDetail1.sub, match success
			if(ProductSummaryArray[j].category.includes(ProductDetailArray[i].category))
			{
				if(ProductSummaryArray[j].subcategory.includes(ProductDetailArray[i].subcategory))
				{
					matchCounter++;
					break;
				}
			}
			
		}
		if(matchCounter < 1)
		{
			console.log(ProductDetailArray[i].category+", "+ProductDetailArray[i].subcategory+", "
			+ProductDetailArray[i].product+", "+ProductDetailArray[i].price+", "+ProductDetailArray[i].stock+", "
			+ProductDetailArray[i].sales+", "+ProductDetailArray[i].profit+", "+ProductDetailArray[i].dateAdded);
		}
		
	}
}






/* Exercise 6
The Product Detail table has duplicate products.  For example: Lincoln Industrial Grease Gun Cordless With Case
Write a function that returns an Array of Objects.  Each Object has 2 properties:
•	product
•	duplicateCount

List the duplicates in the console.

Example:
countProductDuplicates()

"Buffalo Tools Pro Series 12 Piece Router Bit Set" has 3 duplicates
"Hitachi 18 V Ni-cad Cordless Driver Drill" has 2 duplicates
*/


function countProductDuplicates()
{
	var print = [];
	productDetail = ProductDetailArray;
	var matchCounter = 0;
	for(let i = 0; i < productDetail.length; i++)
	{
		for(let j = 0; j < print.length; j++)
		{
			if(print[j].product.includes(productDetail[i].product))
			{
				print[j].Total ++;
				matchCounter++;
			}
		}
		if(matchCounter < 1)
		{
			var temp = [];
			temp = {product: productDetail[i].product,
				"Total" : 1};
			print.push(temp);
		}
		matchCounter = 0;
	}
	
	for(let i = 0; i < print.length; i++)
	{
		
		if(print[i].Total > 1)
		{
			console.log("'"+print[i].product +"' has "+ print[i].Total+ " duplicates");
		}
	}
			
}



/* Exercise 7
In the console, write out the JSON representation of the Product Detail table.  
Filter the result so that it returns only the category / subcategory combination supplied by the parameters.

Example:
productsToJson(category, subcategory)

productsToJson("DIY", "Electrical")			
*/
function productsToJson(Category = "Service Shop", SubCategory = "Electrical")// <-assign preferred category here
{
	productDetails = ProductDetailArray;

		for(let i = 0; i < productDetails.length; i++)
		{
			if(JSON.stringify(productDetails[i]).includes(Category))
			{
				if(JSON.stringify(productDetails[i]).includes(SubCategory))
				{
				console.log(
					JSON.stringify(
						{
						category: 	productDetails[i].category,
						subcategory:productDetails[i].subcategory,
						price: 		parseFloat(productDetails[i].price),
						stock: 		parseFloat(productDetails[i].stock),
						sales: 		parseFloat(productDetails[i].sales),
						profit:		parseFloat(productDetails[i].profit),
						dateAdded: 	productDetails[i].dateAdded,
					}));
					break;
			}
		}
		}
}










/* Exercise 8
You’ll find that the duplicate product names have varying categories and subcategories.  (Yes, we fired the data entry clerk!)

For instance:
Product		|	Category	|	Subcategory	|	Sales
Product A 	| 	Cat 1 		| 	Subcat 1 	|	20
Product A 	| 	Cat 4 		| 	Subcat 3	|	45
Product A 	| 	Cat 3 		| 	Subcat 2	|	35

What if the duplicate product names had the same category and subcategory as the first occurrence of that product name?  
What would the sales totals be per subcategory?  

Product		|	Category	|	Subcategory	|	Sales
Product A 	| 	Cat 1 		| 	Subcat 1 	|	100

Write a function that calculates the “what if” sales totals for each subcategory.  

Example:
listCorrectedSubcategorySales()

Write it to the console.
*/


function listCorrectedSubcategorySales()
{
	var print = [];
	ProductDetail = ProductDetailArray;

	for(let i = 0; i < ProductDetail.length; i++)
	{
		var counter = 0;

		for(let j = 0; j < print.length; j++)
		{

			if(print[j].product.includes(ProductDetail[i].product))
			{
				print[j].sales += ProductDetail[i].sales;
				print[j].Total ++;
				counter ++;
			}
		}

		if(counter < 1)
		{
			
			temp = [];
			//temp = {"Product": +ProductDetail[i].product +" | Category: "+ ProductDetail[i].category +" | Subcategory: "+ProductDetail[i].subcategory +" | sales:" +ProductDetail[i].sales +" | Total:1"};

			temp = {product: ProductDetail[i].product, category: ProductDetail[i].category, subcategory: ProductDetail[i].subcategory, sales: ProductDetail[i].sales, Total:1};

			print.push(temp);
			
		}
	}

	var SubcatSales = print.map(function(x)
	{
		if(x.Total > 1)
		{
			return x.product + x.category + x.subcategory + x.sales;
		}
	});
	
	console.log(SubcatSales);
}








/* Exercise 9
It’s hard to find a product on the page.
Write a search function that would return all the products for the search term on the page.  
The search term applies to the subcategory only.
			
Your function will take 3 parameters:
•	searchTerm			string
•	searchType			string
	•	"startsWith" or
	•	"endsWith" or
	•	"contains"
•	isCaseSensitive		Boolean

Your function will find the products starting with, ending with or containing the text of the search term.
The search may be case sensitive or case insensitive.

If an empty search term is given, return all results.

From the results, build up a string to form an HTML description list (<dl>) as follows:

<dl>
	<dt>Product 1</dt>
	<dd>
		Category-Subcategory
		<ul>
			<li>Price</li>
			<li>Stock</li>
			<li>Sales</li>
			<li>Profit</li>
			<li>DateAdded</li>
		</ul>
	</dd>
	<dt>Product 2</dt>
	<dd>
		Category-Subcategory
		<ul>
			<li>Price</li>
			<li>Stock</li>
			<li>Sales</li>
			<li>Profit</li>
			<li>DateAdded</li>
		</ul>
	</dd>	
	
	<!-- etc -->
</dl>

Log the results to the console.


Example:
search(searchTerm, searchType, isCaseSensitive)

search("Elec", "startsWith", true)
	

Result:
Searching for subcategories stariting with "Elec" (case sensitive)

<dl>
	<dt>Buffalo Tools Pro Series 12 Piece Router Bit Set</dt>
	<dd>
		Woodworking-Electrical
		<ul>
			<li>860.95</li>
			<li>495</li>
			<li>2119</li>
			<li>482080.92</li>
			<li>2015-07-13</li>
		</ul>
	</dd>
	<dt>Hitachi 18 V Ni-cad Cordless Driver Drill</dt>
	<dd>
		Construction-Electrical
		<ul>
			<li>797.81</li>
			<li>8056</li>
			<li>2814</li>
			<li>367250.09</li>
			<li>2014-10-11</li>
		</ul>
	</dd>	
</dl>
*/

function search(searchTerm, searchType, isCaseSensitive)
{
	var print = [];
	productDetail = ProductDetailArray;
	
	var isCaseSensitive = false;
	
	var searchTerm;
	var	searchType;
	var searchType;
	var searchFor;

	if(searchType.toUpperCase() == "STARTSWITH")
	{
		var termLength = searchTerm.length;
		for(let i = 0; i < productDetail.length; i++)
		{
			searchFor = productDetail[i].subcategory;
		
			if(isCaseSensitive == true)
			{
				if(searchFor(termLength) == searchTerm)
				{
					print.push(productDetail[i]);
				}
			}
			else
			{ 
				if(searchFor(termLength).toUpperCase() == searchTerm.toUpperCase())
				{
					print.push(productDetail[i]);
				}	
			}
		}
	}

	if(searchType.toUpperCase() == "ENDSWITH")
	{
		var termLength = searchTerm.length;
		for(let i = 0; i < productDetail.length; i++)
		{
			var searchFor = productDetail[i].subcategory;
		
			if(isCaseSensitive)
			{
				if(reverse(searchFor) == reverse(searchTerm) )
				{
					print.push(productDetail[i]);
				}
			}
			else if(reverse(searchFor).toUpperCase() == reverse(searchTerm.toUpperCase()))
			{
				print.push(productDetail[i]);
			}	
		}
	}
	if(searchType.toUpperCase()  == "CONTAINS")
	{
		for(let i = 0; i < productDetail.length; i++)
		{
			var searchFor = productDetail[i].subcategory;
		
			if(isCaseSensitive)
			{
				if(searchFor.includes(searchTerm))
				{
					print.push(productDetail[i]);
				}
			}
			else if(print.toUpperCase().includes(searchTerm.toUpperCase()))
			{
				print.push(productDetail[i]);
			}	
			
		}
	}		
	else if(searchTerm == null)
	{
		print = productDetail;
	}
}


function reverse(endsWith) 
{
	var x = '';
	
	for (var i = endsWith.length - 1; i >= 0; i--)
	{
		x += endsWith[i];
	}
	return x;    
}






