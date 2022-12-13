import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TodoList = () => {
    const [todoData, setTodoData] = useState(null);

    const fetchtodoData = async () => {
        const resp = await axios.get("/getTodos");
        console.log(resp);

        if (resp.data.todos.length > 0) {
            setTodoData(resp.data.todos);
        }
    };

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
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between">
                  <h2 className="text-gray-900 title-font font-medium">{todo.title}</h2>
                  <div className="space-x-4">
                    <button className="bg-green-500 px-5 py-1 rounded-md text-white">Edit</button>
                    <button className="bg-red-500 px-3 py-1 rounded-md text-white">Delete</button>
                  </div>
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