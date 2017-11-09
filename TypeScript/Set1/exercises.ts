/* General
The exercises require you to use TypeScript to query the tables for data, write results to the console.
•	Don’t edit the <table> elements directly in your editor.
•	Don’t use external JS frameworks at this point.
•	Write a function for each exercise.  Even if we change the data, the function must still work.
•	The function must always return a result, even if just an empty array i.e. never null or undefined
•	Each function needs a corresponding test
•	Define interfaces and classes for your functions' return types if they are complex types
•	All your code must be strongly typed.  No "any"'s are allowed
*/



/* Exercise 1
Define an interface to describe the columns of the Product Summary table.
Write a function that takes an html element id as a string parameter, and returns an array of columns as defined in your interface.

Example:
tableToProductSummary(productSummaryId : string)

tableToProductSummary("summary")
*/

import { IProductSummaryLine } from "./IProductSummaryLine";

export class Exercise1 {
    public static tableToProductSummary(productSummaryId : string): IProductSummaryLine[] {
		let table: HTMLTableElement = <HTMLTableElement> document.getElementById(productSummaryId);
		let rows: Array<HTMLTableRowElement> = Array.from(table.tBodies[0].rows);

		return rows.map(r => (
			{
				category: String(r.children[0].textContent),
				subCategory: String(r.children[1].textContent),
				sales: parseInt(String(r.children[2].textContent),10)
			}
		));
    }
}

/* Exercise 2
Define an interface to describe the columns of the Product Details table.
Write a function that takes an html element id as a string parameter, and returns an array of columns as defined in your interface.

Example:
tableToProductDetail(productDetailId : string)

tableToProductDetail("detail")
*/

import { IProductDetailLine } from "./IProductDetailLine";

export class Exercise2 {
    public static tableToProductDetail(productDetailId : string): IProductDetailLine[] {
		let table: HTMLTableElement = <HTMLTableElement> document.getElementById(productDetailId);
		let rows: Array<HTMLTableRowElement> = Array.from(table.tBodies[0].rows);

		return rows.map(r => (
			{
				product: String(r.children[0].textContent),
				category: String(r.children[1].textContent),
				subCategory: String(r.children[2].textContent),
				price: parseFloat(String(r.children[3].textContent)),
				stock: parseInt(String(r.children[4].textContent),10),
				sales: parseInt(String(r.children[5].textContent),10),
				profit: parseFloat(String(r.children[6].textContent)),
				dateAdded: new Date(String(r.children[7].textContent))
			}
		));
    }
}

/* Exercise 3
Design a class called ProductAggregator.
The constructor should log the message "We have a new ProductAggregator" to the console whenever the class is instantiated.
Add a method called listProductTotalsBySubcategory()

Using the data from the Product Detail table, your method should return the number of products in each subcategory as an Array of Objects.
Each Object will have 3 properties:
•	category (string)
•	subcategory (string)
•	total (number)

Define an interface to describe the items in the returned array.

Example:
listProductTotalsBySubcategory()

If you have 2 categories with 2 subcategories each, your method could return
[
	{ category : "Construction", subcategory : "Accessories", total : 4 },
	{ category : "Construction", subcategory : "Pneumatic", total : 2 },
	{ category : "DIY", subcategory : "Accessories", total : 5 },
	{ category : "DIY", subcategory : "Electrical", total : 7 }
]

You don't have to log anything to the console.  Your method simply needs to return the result.
*/

// Implement your code in ProductAggregator.ts








/* Exercise 4
Add a new method listTotalSalesByCategory() to your ProductAggregator class.
Using the data from the Product Detail table, your method should return the total sales for each subcategory in a given category.
Your method will take a category parameter (string) and return an Array of Objects.  Each Object has 3 properties:
•	category (string)
•	subcategory (string)
•	totalSales (number)
Define an interface to describe the items in your returned array.

Example:
listTotalSalesByCategory(data, "DIY")

could return
[
	{ category : "DIY", subcategory : "Accessories", totalSales : 4234 },
	{ category : "DIY", subcategory : "Pneumatic", totalSales : 2546 },
	{ category : "DIY", subcategory : "Electrical", totalSales : 7478 }
]

You don't have to log anything to the console.  Your method simply needs to return the result.
*/

// Implement your code in ProductAggregator.ts








/* Exercise 5
Design a new class called ProductInspector.
The constructor should log the message "We have a new ProductInspector" to the console whenever the class is instantiated.
Write a method to calculate the cost of the stock on hand per subcategory.
Cost is the ((Price*Sales)-Profit)/Stock
Then for each subcategory add a new field to show an inflation increase of x% (supplied as a parameter)
Define an interface to describe your return type.

Example:
listAdjustedCostBySubcategory(category : string, subcategory : string, 10 : number)

may return
{ category: "DIY", subcategory : "Electrical", costOfStock : 100, costOfStockWithInflation: 110 }

You don't have to log anything to the console.  Your method simply needs to return the result.
*/

// Implement your code in ProductInspector.ts






/* Exercise 6
There are inconsistencies between the Product Detail and the Product Summary data on the HTML document.
Add a method to your ProductInspector class that returns the Product Detail rows for which there are no corresponding rows in the Product Summary table.
Return them as an array of product details as described in your interface from Exercise 2.

Example:
listMissingProductLines()

may return the result:

[
	{ product : "Buffalo Tools Pro Series 12 Piece Router Bit Set", category : "Woodworking", subcategory : "Accessories", price : 860.95, stock : 465, sales : 2119, profit : 482080.92, dateAdded : "2015-07-13" },
	{ product : "Hitachi 18 V Ni-cad Cordless Driver Drill", category : "Construction", subcategory : "Cordless", price : 797.81, stock : 8056, sales : 2814, profit : 367250.09, dateAdded : "2014-10-11" }
]

*/

// Implement your code in ProductInspector.ts








/* Exercise 7
The Product Detail table has duplicate products.  For example: Lincoln Industrial Grease Gun Cordless With Case
Add a method to your ProductInspector class that returns an array of duplicates.  Each item has 2 properties:
•	product
•	duplicateCount
Describe your return type in an interface

Example:
countProductDuplicates()

[
	{ product : "Buffalo Tools Pro Series 12 Piece Router Bit Set", duplicateCount : 3 },
	{ product : "Hitachi 18 V Ni-cad Cordless Driver Drill", duplicateCount : 2 }
]
*/

// Implement your code in ProductInspector.ts









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

Add a method to your ProductInspector class that calculates the “what if” sales totals for each subcategory.

Return an array of objects.  Define your object's interface.

Example:
listCorrectedSubcategorySales()

[
	{ product : "Buffalo Tools Pro Series 12 Piece Router Bit Set", category : "DIY", subcategory : "Electrical", sales : 56 },
	{ product : "Hitachi 18 V Ni-cad Cordless Driver Drill", category : "Woodworking", subcategory : "Electrical", sales : 198 }
]
*/

// Implement your code in ProductInspector.ts








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

Define an interface for this input model.

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

Return the string result.


Example:
search(searchModel : ISearchModel)

let searchModel = { searchTerm : "Elec", searchType : "startsWith", isCaseSensitive : true }
search(searchModel)


Result:
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

// Implement your code in ProductInspector.ts










