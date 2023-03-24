'use client'

import Navbar from '@/components/navbar/Navbar'
import SideBar from '@/components/sidebar'

export default function Home() {
	return (
		<main className=''>
			<Navbar />
			{/* <span>{value}</span>

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
			</button> */}
			<SideBar />
		</main>
	)
}
