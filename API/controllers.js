// import todos
let todos = require('../todos');

exports.fetchTodos = (req, res) => res.json(todos);
