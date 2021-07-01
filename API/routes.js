const express = require('express');
const router = express.Router();
const { fetchTodos } = require('../API/controllers');

router.get('/', fetchTodos);

// router.post('/', createTod);

// router.delete('/:todoId', deleteTodo);

module.exports = router;
