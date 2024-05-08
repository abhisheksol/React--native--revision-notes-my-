const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

let users = [];

// GET request to fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST request to create a new user
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newUser = { name, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT request to update a user by name
app.put('/users/:name', (req, res) => {
  const { name } = req.params;
  const { age } = req.body;
  const userIndex = users.findIndex(user => user.name === name);
  if (userIndex !== -1) {
    users[userIndex].age = age;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE request to delete a user by name
app.delete('/users/:name', (req, res) => {
  const { name } = req.params;
  const userIndex = users.findIndex(user => user.name === name);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
