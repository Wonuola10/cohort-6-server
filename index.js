const express = require('express');

const app = express();

const port = 8080;
app.get('/', (request , response) => {
    response.send('Server is up and running');
});

//Simulated in-memory database
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },

]
 //Get all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

//Get a single user by ID
app.get('/users/:id', (req, res) => {
const id = parseInt(req.params.id);
const user = users.find(el => el.id === id);

if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
res.status(200).json(user);
});



app.listen(port,()=> {
    console.log(`Server is listening on port ${port}`);
});
