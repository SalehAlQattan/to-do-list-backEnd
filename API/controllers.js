// import todos
let todos = require('../todos');

// get all todos
exports.fetchTodos = (req, res) => res.json(todos);

// create new todo
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

// delete todo
exports.deleteTodo = (req, res) => {
  const { todoId } = req.params;
  // check if found
  const foundTodo = todos.find((todo) => todo.id === +todoId);
  // filter
  if (foundTodo) {
    todos = todos.filter((todo) => todo.id !== +todoId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Todo Not found' });
  }
};
