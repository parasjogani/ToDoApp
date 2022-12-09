const Todo = require('../models/todo');

exports.home = (req, res) => {
    res.send("Hello world")
}


//Add Todo
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        //Validate all details
        if(!title){
            throw new Error("Please enter title");
        }

        // Inserting into database
        const todo = await Todo.create({ title });
        res.status(201).json({
            success: true,
            message: "Title added successfully",
            todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
        console.log(error);
    }
}

//Add Tasks
exports.createTodos = async (req, res) => {
    try {
        const todoId = req.params.todoId;
        const todo = await Todo.findById(todoId);
        if (!todo) {
            throw new Error("todo not found");
        }
        const { text } = req.body;
        if (!text) {
            throw new Error("Please enter some value");
        }
        todo.tasks.push(text);
        await todo.save();
        res.status(201).json({
            success: true,
            message: "task created successfully",
            todo
        })
    } catch (error) {
        console.log(error);
    }
}


//To get all Todos
exports.getTodos = async (req, res) => {
    try {   
        const todos = await Todo.find();
        res.status(201).json({
            success: true,
            message: "Successfull",
            todos
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//To get perticular Todo
exports.getTodo = async (req, res) => {
    try {   
        const todoId = req.params.todoId;
        const todo = await Todo.findById(todoId);
        res.status(201).json({
            success: true,
            message: "Todo got successfull",
            todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//Edit Todo Title
exports.editTodo = async (req, res) => {
    try {
        const todoId = req.params.todoId;
        
    } catch (error) {
        
    }
}


