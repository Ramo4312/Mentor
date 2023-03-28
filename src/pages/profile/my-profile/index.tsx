'use client'

import { getUser } from '@/redux/apiCalls'
import Navbar from '@/components/navbar/Navbar'
import SideBar from '@/components/sidebar'
import { useAppSelector } from '@/hooks/hooks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
import { useRouter } from 'next/router'

export interface IUser {
	username: string
	email: string
	image: any
	position: string
	place_of_work: string
	about_me: string
	help: string
	level_mentor: string
	experience: string
	skills: string
	status: string
	price: string
	language: string
	registration_date: string
	specialization: string[]
	password: string
	password_confirm: string
}
export interface IProps {
	data: IUser
}

function MyProfile() {
	const router = useRouter()

	const [error, setError] = useState<boolean>(false)

	const [user, setUser] = useState<IUser | null>(null)
	const [userImage, setUserImage] = useState('')
	const { tokens } = useAppSelector(state => state.user)

	useEffect(function () {
		getUser(tokens?.access, setUser, setError)
	}, [])

	useEffect(() => {
		if (error) {
			router.push('/')
		}
	}, [user])

	useEffect(() => {
		user?.image
			? setUserImage(`https://mentorkgapi.pythonanywhere.com${user.image}`)
			: setUserImage('')
	}, [user])

	return (
		<div>
			<Navbar />
			<div className='flex gap-x-28 items-start mt-16'>
				<div className='w-72'>
					<SideBar />
				</div>
				<div className='w-[46.6rem] pb-44'>
					<div className='flex gap-x-9 mb-9'>
						<img
							src={userImage}
							alt=''
							width='209'
							height='149'
							loading='eager'
							className='rounded-2xl'
						/>
						<div className='flex gap-x-10'>
							<div className='flex flex-col items-start'>
								<div className=''>
									<h3 className='text-[#272343] text-2xl font-semibold mb-[0.63rem]'>
										{user?.username}
									</h3>
									{/* <h5 className='text-[#485174] text-lg font-normal mb-6'>
										QA Lead @Huspy (Dubai)
									</h5> */}
								</div>
								<div className=''>
									{user?.specialization ? (
										<p className='cursor-default px-[0.82rem] py-[0.40rem] font-semibold text-tertiary bg-[#2D334A] rounded-full text-center mb-14'>
											{user.specialization}
										</p>
									) : (
										''
									)}
								</div>
							</div>
							<ul className='mb-[1.13rem] flex flex-col gap-y-3'>
								<li className='list-disc text-xl'>
									<strong>Опыт: </strong> {user?.experience}
								</li>
								<li className='list-disc text-xl'>
									<strong>Цена: </strong> {user?.price}
								</li>
								{/* <li className='list-disc text-xl'>
									2 человека получили <br /> помощь
								</li> */}
							</ul>
						</div>
					</div>
					<div className='flex flex-col items-start'>
						<div className='mb-[4.7rem] '>
							<div className=''>
								<h4 className='text-3xl text-paragraph '>О себе</h4>
								<h5 className='text-little-text text-[1.2rem] my-7'>
									{user?.about_me}
								</h5>
							</div>
							<div className=''>
								<h4 className='text-3xl text-paragraph '>С чем помогу</h4>
								<h5 className='text-little-text text-[1.2rem] my-7'>
									{user?.help}
								</h5>
							</div>
							<div>
								<h4 className='text-xl italic text-paragraph'>
									<span className='text-2xl'>Компетенции:</span>
									{user?.specialization}
								</h4>
							</div>
						</div>
						<Link
							href='/profile/my-profile/edit'
							className='bg-accent hover:bg-tertiary active:bg-active hover:duration-150 duration-200 rounded-lg py-[1.57rem] px-14 text-lg font-medium text-[#2D334A]'
						>
							Редактировать
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
