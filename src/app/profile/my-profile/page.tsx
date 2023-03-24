import Navbar from '@/components/navbar/Navbar'
import SideBar from '@/components/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyProfile = () => {
	return (
		<div>
			<Navbar />
			<div className='flex gap-x-28 items-start mt-16'>
				<div className='w-72'>
					<SideBar />
				</div>
				<div className='w-[46.6rem] pb-44'>
					<div className='flex gap-x-9 mb-9'>
						<Image src='/man.png' alt='' width={209} height={149} />
						<div className='flex gap-x-10'>
							<div className='flex flex-col items-start'>
								<div className=''>
									<h3 className='text-[#272343] text-2xl font-semibold mb-[0.63rem]'>
										Алексей Алтунин
									</h3>
									<h5 className='text-[#485174] text-lg font-normal mb-6'>
										QA Lead @Huspy (Dubai)
									</h5>
								</div>
								<div className=''>
									<p className='px-[0.82rem] py-[0.40rem] font-semibold text-tertiary bg-[#2D334A] rounded-full text-center mb-14'>
										Marketing
									</p>
								</div>
							</div>
							<ul className='mb-[1.13rem] flex flex-col gap-y-3'>
								<li className='list-disc text-xl'>
									<strong>Опыт: </strong> 10+ лет
								</li>
								<li className='list-disc text-xl'>
									<strong>Цена: </strong> 7000 руб
								</li>
								<li className='list-disc text-xl'>
									2 человека получили <br /> помощь
								</li>
							</ul>
						</div>
					</div>
					<div className='flex flex-col items-start'>
						<div className='mb-[4.7rem] '>
							<div className=''>
								<h4 className='text-3xl text-paragraph '>О себе</h4>
								<h5 className='text-little-text text-[1.2rem] my-7'>
									8 лет профессионально занимаюсь IT подбором. Весь опыт работы
									связан с внешним подбором, потому видел много всякого :)
									Хорошо представляю рынок, постоянно общаюсь с большим
									количеством нанимающих менеджеров, HR и кандидатов. Местами
									знаю внутреннюю кухню компаний из рук очевидцев. Широкий круг
									друзей и знакомых в IT.
								</h5>
							</div>
							<div className=''>
								<h4 className='text-3xl text-paragraph '>С чем помогу</h4>
								<h5 className='text-little-text text-[1.2rem] my-7'>
									Помогу разобраться с тем, как искать работу, куда ходить, куда
									не ходить, что спросить, перед тем как согласиться, про
									карьерные треки, возможности и прочие HR штуки. <br /> <br />{' '}
									Например, последний раз мы обсуждали актуальную "стоимость" на
									рынке, что улучшить в резюме, стратегия прохождения интервью и
									конкретные рекомендации, что обязательно спросить и осветить
									на интервью.
								</h5>
							</div>
							<div>
								<h4 className='text-xl italic text-paragraph'>
									<span className='text-2xl'>Компетенции:</span> HR, Career
									Consulting, Recruitment, Рекрутинг, Карьера, найм,
									headhunting, поиск работы
								</h4>
							</div>
						</div>
						<Link
							href='/profile/my-profile/edit'
							className='bg-accent rounded-lg py-[1.57rem] px-14 text-lg font-medium text-[#2D334A]'
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
