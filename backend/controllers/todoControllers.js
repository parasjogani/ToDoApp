const Todo = require('../models/todo');

exports.home = (req, res) => {
    res.send("Hello world")
}

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