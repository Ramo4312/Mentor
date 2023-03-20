'use client'

import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counterSlice'
import { useAppSelector } from '@/hooks/hooks'

export default function Home() {
	const { value } = useAppSelector(state => state.counter)
	const dispatch = useDispatch()

	return (
		<main className='flex gap-x-9 h-[100vh] justify-center items-center'>
			<span>{value}</span>

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
