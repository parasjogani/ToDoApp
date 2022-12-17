import React from 'react'
import { useState } from 'react'
import axios from "axios"

const TitleForm = () => {
    //Store the value from frontend
    const [todoTitle, settodoTitle] = useState("")
    console.log(todoTitle);
    //Function to send data to DB
    const submitData = async () => {
        const data = {
            title: todoTitle
        };
        const res = await axios.post("/createTodo", data)
        console.log(res);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitData();
        settodoTitle("");

    }

  return (
    <>
        <div className="flex flex-col max-w p-6 rounded-md sm:p-10">
	        <div className="mb-8 text-center">
		        <h1 className="my-3 text-4xl font-bold">Welcome to TODO APP</h1>
	        </div>
	        <form onSubmit={handleSubmit}>
		        <div className="flex justify-center align-center gap-3">
			        <div>
				        <input type="text" name="title" id="title" placeholder="Input your title here" className="w-[280px] px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-700"
                        value={todoTitle} onChange={(event) => settodoTitle(event.target.value)}
                        />
			        </div>
			        <div>
				        <button type="submit" className="px-6 py-2 font-semibold rounded-md border">Submit</button>
			        </div>
		        </div>
	        </form>
        </div>
    </>
    
  )
}

export default TitleForm