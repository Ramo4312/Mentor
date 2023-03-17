import TodoList from './TodoList'

export const metadata = {
	title: 'Todo',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex'>
			{/* @ts-expect-error Server Component */}
			<TodoList />
			<div className='flex'>{children}</div>
		</div>
	)
}

export default RootLayout
