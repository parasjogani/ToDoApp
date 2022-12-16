import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TodoList = () => {
    const [todoData, setTodoData] = useState(null);

    const fetchtodoData = async () => {
        const resp = await axios.get("/getTodos");

        if (resp.data.todos.length > 0) {
            setTodoData(resp.data.todos);
        }
    };

    //Add Task
    const handleAddTask = async (todo) => {
      const newTask = prompt("Enter new task")

      if (!newTask) {
        alert("Please enter your task")
      } else {
        const resp = await axios.post(`/createTodos/${todo._id}`, {
          text: newTask
        });
        console.log(resp);
      }

    }

    //Edit

    const handleEdit = async (todo) => {
      const newTitle = prompt("Enter new title")

      if (!newTitle) {
        alert("Please enter your title")
      } else {
        const resp = await axios.put(`/editTodo/${todo._id}`, {
          title: newTitle
        });
        console.log(resp);
      }

    }

    //Delete
    const handleDelete = async (todoId) => {
      const resp = await axios.delete(`/deleteTodo/${todoId}`)
      console.log(resp);
    }

    //Delete Task
    const handleDeleteTask = async (todo, val) => {
      const resp = await axios.delete(`/deleteTask/${todo._id}`,
      {name: val} 

      )
      
      console.log(resp);
    }

    useEffect(() => {
        fetchtodoData();
    }, [todoData]);


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Todo List</h1>
    </div>
    
    <div className="flex flex-wrap -m-2">
          {todoData && todoData.map((todo) => (
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full items-center border-gray-200 border bg-sky-200 p-4 rounded-lg">
                <div className="flex-grow flex justify-between">
                  <h2 className="sm:text-xl text-lg text-gray-900 title-font font-medium">{todo.title}</h2>
                  <div className="space-x-4">
                    <button className="bg-neutral-700 px-5 py-1 rounded-md text-white" onClick={() => handleAddTask(todo)}>Add Task</button>
                    <button className="bg-green-500 px-5 py-1 rounded-md text-white" onClick={() => handleEdit(todo)}>Edit</button>
                    <button className="bg-red-500 px-3 py-1 rounded-md text-white" onClick={() => handleDelete(todo._id)}>Delete</button>
                  </div>
                </div>
                <div >
                  {todo.tasks.map((val, index) => 
                    <li>{val}<button class="rounded-full bg-red-700 text-white" onClick={() => handleDeleteTask(todo, index)}>X</button></li>

                    )}
                </div>
              </div>
            </div>
          ))}
    </div>
  </div>
</section>
  )
}

export default TodoList