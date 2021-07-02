// packages
const express = require('express');
const router = express.Router();
// controllers
const { fetchTodos, createTodo, deleteTodo } = require('../API/controllers');

// fetch all todos
router.get('/', fetchTodos);
// create todo
router.post('/', createTodo);
// delete todo
router.delete('/:todoId', deleteTodo);

module.exports = router;
