const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title"],
        maxlength: [30, "Title not should be more than 30 character"]
    },
    task: [
        {
            title: String
        }
    ]
})

module.exports = mongoose.model("Todo", todoSchema);