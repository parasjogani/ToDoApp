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
        const id = req.params.id;
        const todo = await Todo.findById(id);
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
        const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
            success: true,
            message: "Todo title updated successfully",
            newTodo
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        })
    }
}

//Edit Todo Tasks
exports.editTodos = async (req, res) => {
    try {
        const {newVal, index} = req.body
        const todo = await Todo.findById(req.params.id);
        todo.tasks[index] = newVal;
        todo.save();

        res.status(201).json({
            success: true,
            message: "Task updated successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

//Delete Todo
exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(201).json({
            success: true,
            message: "Selected todo deleted successfully",
            deletedTodo
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

//Delete task
exports.deleteTask = async (req, res) => {
    try {
        const {name} = req.body;
        const todo = await Todo.findById(req.params.id);
        todo.tasks.splice(name, 1);
        await todo.save();

        res.status(201).json({
            success: true,
            message: "Task deleted successfully",
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Failed"
        })
    }
}


