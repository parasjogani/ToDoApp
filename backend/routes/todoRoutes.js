const express = require('express');
const { home, createTodo, getTodos } = require('../controllers/todoControllers');
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);

module.exports = router;