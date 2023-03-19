'use client'
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counterSlice'
import RegisterPage from './account/register/page'

export default function Home() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<main className='flex gap-x-9 h-[100vh] justify-center items-center'>
			<RegisterPage />
			<span>{count}</span>

			<button
				className='px-4 py-1 bg-slate-300 rounded-lg'
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<button
				className='px-4 py-1 bg-slate-300 rounded-lg'
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
			<button
				className='px-4 py-1 bg-slate-300 rounded-lg'
				onClick={() => dispatch(incrementByAmount(2))}
			>
				add 2
			</button>
		</main>
	)
}
