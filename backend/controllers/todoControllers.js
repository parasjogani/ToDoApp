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
        res.send(201).json({
            success: true,
            message: "Title added successfully",
            todo
        })
    } catch (error) {
        res.send(500).json({
            success: false,
            message: "Internal server error"
        })
        console.log(error);
    }
}


//To get all Todos
exports.getTodos = async (req, res) => {
    try {   
        const todos = await Todo.find();
        res.status(201).json(todos)
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

