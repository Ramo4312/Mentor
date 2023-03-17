'use client'
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counterSlice'
export default function Home() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()
	return (
		<main>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<span>{count}</span>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(2))}>add 2</button>
		</main>
	)
}
