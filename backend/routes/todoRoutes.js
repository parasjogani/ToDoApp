const express = require('express');
const { home, createTodo, getTodos, createTodos, getTodo, editTodo, editTodos, deleteTodo, deleteTask } = require('../controllers/todoControllers');
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.post("/createTodos/:todoId", createTodos);
router.get("/getTodos", getTodos);
router.get("/getTodo/:todoId", getTodo);
router.post("/editTodo/:todoId", editTodo);
router.post("/editTodos/:todoId", editTodos);
router.post("/deleteTodo/:todoId", deleteTodo);
router.post("/deleteTask/:todoId", deleteTask);



module.exports = router;