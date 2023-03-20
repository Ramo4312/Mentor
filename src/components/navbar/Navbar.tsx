import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<nav className='w-full py-3 flex justify-between px-20 my-4'>
			<div className=''>
				<img src='/Logo.svg' alt='' />
			</div>
			<div className='flex gap-x-9'>
				<Link
					className='px-3 py-2 rounded-xl text-dark-blue text-[1rem] text-center bg-accent'
					href={''}
				>
					Стать ментором
				</Link>
				<Link
					className='px-3 py-2 rounded-xl text-black text-[1rem] text-center bg-tertiary'
					href={''}
				>
					Войти
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
