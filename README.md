# bamazon store

## Overview
Bamazon takes in orders from customers and deplete stock from the store's inventory. 


## Submission Guide


## Instructions

### Customer View

1. A MySQL Database called `bamazon` was created

2. A Table inside of that database called `products` was created

3. The products table have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. "Mock" data was created inside the rows into this database and table.

5. A Node application called `bamazonCustomer.js` was created. When running this application will first display all of the items available for sale; Including the ids, names, and prices of products for sale.

6. The app should've then prompt users with two messages.

   * The first was supposed to ask them the ID of the product they would like to buy. // I'm still trying to make this works.
   * The second message was supposed to ask how many units of the product they would like to buy. // I'm still trying to make this works.

7. Once the customer has placed the order, this application should've check if my store has enough of the product to meet the customer's request.

   * If not, the app should've log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if this store _does_ have enough of the product, it should've fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

