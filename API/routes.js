const express = require('express');
const router = express.Router();
const { fetchTodos, createTodo } = require('../API/controllers');

router.get('/', fetchTodos);

router.post('/', createTodo);

// router.delete('/:todoId', deleteTodo);

module.exports = router;
