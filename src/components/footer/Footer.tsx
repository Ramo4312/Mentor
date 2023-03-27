import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<div className=' mt-44 w-full flex flex-col py-[3.63rem] justify-center items-center bg-[#E3F6F5]'>
			<p className='text-center text-little-text mb-[4.4rem]'>
				{' '}
				Правильный разговор прояснит ситуацию лучше, чем десять <br /> часов
				поисков в интернете.{' '}
			</p>
			<div className='flex gap-x-[6.44rem]'>
				<Link className='underline hover:text-little-text' href={''}>
					Найти ментора
				</Link>
				<Link className='underline hover:text-little-text' href={''}>
					Стать ментором
				</Link>
			</div>
		</div>
	)
}

export default Footer
