import React from 'react'

const TitleForm = () => {
  return (
    <form action="">
        <div className="flex flex-col max-w p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Welcome to TODO APP</h1>
		
	</div>
	<form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="flex justify-center align-center gap-3">
			<div>
				<input type="text" name="title" id="title" placeholder="Input your title here" className="w-[280px] px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>

			<div>
				<button type="button" className="px-6 py-2 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Submit</button>
			</div>
		</div>
	</form>
</div>
    </form>
  )
}

export default TitleForm