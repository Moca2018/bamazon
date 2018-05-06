

//////////////////////////The following is the logic of bamazon/////////////////////////

// Require/import the HTTP module
var mysql = require("mysql");
var inquirer = require("inquirer");
var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);


////////////////////////////////function to handle requests and responses//////////////////////
function handleRequest(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
    };

///////////////////////////function to connect to mysql/////////////////////////////////////////
var connection = mysql.createConnection({
    host: "localhost",
    //my username
    user: "root",
    //my password
    password: "1234",
    database: "bamazon"
  });

///////////////////////////function to run the table/////////////////////////////////////////

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    getTable();
    })

//////////////////////////////function to listen to the Port ////////////////////////////////
// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });

////////////////////////////////function to display products ////////////////////////////////

////////////////////////----


var getTable = function() {
    var query = 'SELECT * FROM products'
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
        console.log("item_id: " + res[i].item_id + " || product_name: " + res[i].product_name + " || department_name: " + res[i].department_name + " || price: " + res[i].price + " || stock_quantity: " + res[i].stock_quantity);
        }
        order();
      })
  };


////////////////////////////////////////////////////////////////////////////////////////////

var order = function() {
    inquirer.prompt([{
        name: "item_id",
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
        name: "stock_quantity",
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

 
//////////////////////////////////////////////////// Display all products
  
  var query = 'SELECT * FROM products WHERE item_id=' + answer.stock_quantity;
  connection.query(query, function(err, res) {
    if (answer.stock_quantity <= res) {
      for (var i = 0; i < res.length; i++) {
          console.log("We have available " + res[i].stock_quantity + " " + res[i].product_name + ".");
          console.log("Your order of "+ res[i].stock_quantity + " " + res[i].product_name + " is now processing!");
        }
      } else {
        console.log("Insufficient quantity!");
      }
      getTable();
  })
  })
  connection.end();



  };
  