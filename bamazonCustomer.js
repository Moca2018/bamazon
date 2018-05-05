//The following is the logic of bamazon

var mysql = require("mysql")
var inquirer = require("inquirer")
var connection = mysql.createConnection({
    host: "localhost",
    // port: ,
  
    // Your username
    user: "root",
  
    // Your password
    password: "1234",
    database: "bamazon"
  });


  ////////////////////////////////////////////////////
  //this function is for to connect to mysql
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    getTable();
  });

  //this is where i'm suppoosed to see the data come back
  function getTable() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
    
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });

  }


////////////////////////////////////////////////////
//console log: What is the ID of the product they would like to buy?
//console log: how many units of the product they would like to buy?
//console.log `Insufficient quantity!
//res is an array of objects
//Refine the look of the data
//now i'm just getting raw data
//isolate data from the array
//object orientation


var Order = function() {
  inquirer.prompt([{
      name: "ProductID",
      type: "input",
      message: "What is the ID of the product that you would like to buy?",
      
      //Validation goes here
      validate: function(value) {
          if (isNaN(value) == false) {
              return true;
          } else {
              return false;
          }
      }
  }, {
      name: "Quantity",
      type: "input",
      message: "how many units of the product they would like to buy?",
      validate: function(value) {
          if (isNaN(value) == false) {
              return true;
          } else {
              return false;
          }
      }
  }]).then(function(answer) {

////////////////////////////////////////////////////

var query = 'SELECT * FROM Products WHERE itemID=' + answer.Quantity;
connection.query(query, function(err, res) {
  if (answer.Quantity <= res) {
    for (var i = 0; i < res.length; i++) {
        console.log("We have available " + res[i].stockQuantity + " " + res[i].productName + ".");
        console.log("Your order of "+ res[i].stockQuantity + " " + res[i].productName + " is now processing!");
      }
    } else {
      console.log("Insufficient quantity!");
    }
    displayProducts();
})
})
};

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});