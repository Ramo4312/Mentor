'use client'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile = () => {
	const router = useRouter()

	return (
		<div>
			<Navbar />
			<div className='mt-20 w-full max-w-[1440px] px-[11.3125rem]'>
				<div className='flex gap-x-28 mb-20'>
					<Image src='/man.png' alt='' width={554} height={469} />
					<div className='flex flex-col items-start'>
						<div className=''>
							<h3 className='text-[#272343] text-3xl font-semibold mb-[0.63rem]'>
								Алексей Алтунин
							</h3>
							<h5 className='text-[#485174] text-xl font-normal mb-6'>
								QA Lead @Huspy (Dubai)
							</h5>
						</div>
						<div className=''>
							<p className='px-[0.82rem] py-[0.40rem] font-semibold text-tertiary bg-[#2D334A] rounded-full text-center mb-14'>
								Marketing
							</p>
						</div>
						<ul className='mb-[1.13rem] flex flex-col gap-y-3'>
							<li>
								<p>😎 10+ лет опыта</p>
							</li>
							<li>
								<p>💰 3000 руб</p>
							</li>
							<li>
								<p>🔵 Не активен</p>
							</li>
						</ul>
						<div className='flex gap-x-4 mb-9 items-center'>
							<h3 className=''>Язык:</h3>
							<Image src='/rus.svg' alt='' width={37} height={37} />
						</div>
						<button
							onClick={() => {
								router.push('/profile/request')
							}}
							className='bg-accent rounded-lg py-[1.57rem] px-14 text-lg font-medium text-[#2D334A]'
						>
							Оставить заявку
						</button>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='mb-[4.7rem] w-[67.37rem]'>
						<div className=''>
							<h4 className='text-4xl text-paragraph '>О себе</h4>
							<h5 className='text-little-text text-[1.4rem] my-7'>
								8 лет профессионально занимаюсь IT подбором. Весь опыт работы
								связан с внешним подбором, потому видел много всякого :) Хорошо
								представляю рынок, постоянно общаюсь с большим количеством
								нанимающих менеджеров, HR и кандидатов. Местами знаю внутреннюю
								кухню компаний из рук очевидцев. Широкий круг друзей и знакомых
								в IT.
							</h5>
						</div>
						<div className=''>
							<h4 className='text-4xl text-paragraph '>С чем помогу</h4>
							<h5 className='text-little-text text-[1.4rem] my-7'>
								Помогу разобраться с тем, как искать работу, куда ходить, куда
								не ходить, что спросить, перед тем как согласиться, про
								карьерные треки, возможности и прочие HR штуки. <br /> <br />{' '}
								Например, последний раз мы обсуждали актуальную "стоимость" на
								рынке, что улучшить в резюме, стратегия прохождения интервью и
								конкретные рекомендации, что обязательно спросить и осветить на
								интервью.
							</h5>
						</div>
						<div>
							<h4 className='text-2xl italic text-paragraph'>
								Компетенции: HR, Career Consulting, Recruitment, Рекрутинг,
								Карьера, найм, headhunting, поиск работы
							</h4>
						</div>
					</div>
					<button
						onClick={() => {
							router.push('/profile/request')
						}}
						className='bg-accent rounded-lg py-[1.57rem] px-14 text-lg font-medium text-[#2D334A]'
					>
						Оставить заявку
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Profile
