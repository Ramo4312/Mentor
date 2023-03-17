import React from 'react'
import { Todo } from '../../../../typings'
import { notFound } from 'next/navigation'

interface TodoProps {
	params: {
		todoId: string
	}
}

const fetchTodo = async (todoId: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`,
		{ next: { revalidate: 60 } }
	)
	const todo: Todo = await res.json()
	return todo
}

const TodoPage = async ({ params: { todoId } }: TodoProps) => {
	const todo = await fetchTodo(todoId)

	if (!todo.id) return notFound()

	return (
		<div>
			<h1>Todo: {todo.id}</h1>
			<h2>{todo.title}</h2>
			<input type='checkbox' checked={todo.completed} />
		</div>
	)
}

export async function generateStaticParams() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
	const todos: Todo[] = await res.json()
	const trimmedTodos = todos.splice(0, 10)
	return trimmedTodos.map(todo => ({
		todoId: todo.id.toString(),
	}))
}

export default TodoPage
