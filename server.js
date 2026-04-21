// Step 1: Import the express module 
const express = require('express');

// Step 2: Create an instance of the express application
const app = express();


//body parser
app.use(express.json());

const studentInfo = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A-" }
];


app.get("/all-data", function(req, res) {
    res.json(studentInfo[0]);
});

// Step 3: Define a route handler for GET requests to /
app.get('/', function(req, res) {
    res.send('Hello, World! Welcome to Express.js');
});

app.get("/about", function(req, res) {
    res.send("This is the about page");
});

app.get("/contact", function(req, res) {
    res.send("This is the contact page");
});

// Step 4: Start listening on port 3000
app.listen(3000, function() {
    console.log('server is up and running');
});
