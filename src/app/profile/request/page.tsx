'use client'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const Request = () => {
	return (
		<div>
			<Navbar />
			<div className='w-full max-w-[1440px] px-[28.13rem]'>
				<h1 className='mb-16'>Запись к ментору</h1>
				<div className='flex gap-x-[3.8rem] mb-24'>
					<Image src='/man.png' alt='' width={189} height={159} />
					<div className='flex flex-col'>
						<h3 className='text-[#272343] text-3xl font-semibold mb-[0.63rem]'>
							Алексей Алтунин
						</h3>
						<h5 className='text-[#485174] text-xl font-normal mb-6'>
							QA Lead @Huspy (Dubai)
						</h5>
						<ul>
							<li>Опыт: 10+ лет</li>
							<li>Цена: 7000 руб</li>
						</ul>
					</div>
				</div>
				<form
					className='flex flex-col items-start gap-y-8'
					onSubmit={e => e.preventDefault()}
				>
					<div className='flex flex-col gap-y-[0.87rem] w-full'>
						<label className='label-in-register' htmlFor=''>
							Email
						</label>
						<input type='text' className='reg-inputs' />
					</div>
					<div className='flex flex-col gap-y-[0.87rem] w-full'>
						<label className='label-in-register' htmlFor=''>
							Ваше имя и фамилия
						</label>
						<input type='text' className='reg-inputs' />
					</div>
					<div className='flex flex-col gap-y-[0.87rem] w-full'>
						<label className='label-in-register' htmlFor=''>
							О чём хотите поговорить?
						</label>
						<textarea className='reg-inputs big-inputs w-full outline-none' />
					</div>
					<div className='flex flex-col gap-y-[0.87rem] w-full mb-12'>
						<label htmlFor='' className='label-in-register'>
							Как вы оцениваете свой уровень?
						</label>
						<CreatableSelect isClearable />
					</div>
					<div className='flex flex-col gap-y-[0.87rem] w-full mb-10'>
						<label className='label-in-register' htmlFor=''>
							Telegram @username
						</label>
						<input type='text' className='reg-inputs' />
					</div>
					<button className='bg-accent rounded-lg py-[1.57rem] px-14 text-lg font-medium text-[#2D334A]'>
						Оставить заявку
					</button>
				</form>
			</div>
			<Footer />
		</div>
	)
}

export default Request
