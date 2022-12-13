const express = require('express');
const { home, createTodo, getTodos, createTodos, getTodo, editTodo, editTodos, deleteTodo, deleteTask } = require('../controllers/todoControllers');
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.post("/createTodos/:id", createTodos);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.put("/editTodo/:id", editTodo);
router.put("/editTodos/:id", editTodos);
router.delete("/deleteTodo/:id", deleteTodo);
router.delete("/deleteTask/:id", deleteTask);



module.exports = router;