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

    //Edit Tasks
    const handleEditTask = async (todo, val) => {
      const newTask = prompt("Enter new task")

      if (!newTask) {
        alert("Please enter your task")
      } else {
        const resp = await axios.put(`/editTodos/${todo._id}`, {
            newVal: newTask,
            index: val
        })
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
                    <li className="flex items-center px-5 ">{val}
                    <div className="items-center px-3">
                      <button class="hover:text-green-600 bg-transparent font-medium px-2 py-1 inline-flex" onClick={() => handleEditTask(todo, index)}>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </span>
                      </button>

                      <button class="hover:text-red-700 bg-transparent font-medium px-2 py-1 inline-flex" onClick={() => handleDeleteTask(todo, index)}>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    </li>

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