const express = require('express');
const { home, createTodo, getTodos, createTodos, getTodo } = require('../controllers/todoControllers');
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.post("/createTodos/:todoId", createTodos);
router.get("/getTodos", getTodos);
router.get("/getTodo/:todoId", getTodo);



module.exports = router;