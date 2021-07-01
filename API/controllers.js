// import todos
let todos = require('../todos');

exports.fetchTodos = (req, res) => res.json(todos);

exports.createTodo = (req, res) => {
  const id = todos.length + 1;
  const newTodo = {
    id,
    name: req.body.name,
    status: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};
