/** 
 * Duc Giang
 * Stock Ticker
 * 
*/

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");
const http = require('http');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let data = JSON.parse(fs.readFileSync("./public/stocks.json"));
let html = fs.readFileSync("./views/stocks.html");

port = process.env.PORT || 3000;

app.get('/stockData', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST","PUT");
  res.send(data);
});

app.get('/', (req,res) => {
  res.statusCode = 200;        
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST","PUT");
  res.setHeader('Content-type', 'text/html');
  res.write(html);
  res.end();
});

app.listen(port, function() {
  console.log("Data server ready at http://localhost:" + port);
});
