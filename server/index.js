const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

/*
 * Anytime you make a full-stack app you need to get data from client side
 * you get data through the request body object
 */

// middleware
app.use(cors());
app.use(express.json()); // will reference this a lot (request body object) req.body

// ROUTES //

// Create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

// Get all todos
app.get('/todos', async(req, res) => {
  try{
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (e) {
    console.error(e.message);
  }
});

// Get a single todo
app.get('/todos/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM TODO WHERE todo_id = $1', [id]);

    res.json(todo.rows[0]); // gets first item
  } catch (e) {
    console.error(e.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (e) {
    console.error(e.message);
  }
});

// Delete a todo
app.delete('/todos/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM TODO WHERE todo_id = $1', [id]);

    res.json('Todo was deleted'); // gets first item
  } catch (e) {
    console.error(e.message);
  }
});

// opens a port on the specified location, in this case 5000
app.listen(5000, () => {
  console.log('server has started on port 5000');
});
