import leftImage from '../../public/Group129.svg'
import rightImage from '../../public/Group136.svg'
import Image from 'next/image'
import HowItWork1 from '../../public/HowItWork1.svg'
import HowItWork2 from '../../public/HowItWork2.svg'
import HowItWork3 from '../../public/HowItWork3.svg'
import MentorFilter from '@/components/mentor/MentorFilter'
import MentorItem from '@/components/mentor/MentorItem'
export default function Home() {
	return (
		<main className=''>
			<header className='relative flex justify-center '>
				<Image
					src={leftImage}
					alt='left-image'
					className='absolute w-[23vw] top-0 left-0'
					priority
				/>
				<div className='flex flex-col items-center w-1/2 mt-14'>
					<h1 className='font-semibold text-[3.5rem] text-center mb-9 text-title'>
						Найди <span className='text-[#FB4868]'>своего</span> ментора
					</h1>
					<p className='text-center leading-8 text-xl font-normal mb-24'>
						Ментор KG - это сообщество ит-специалистов Кыргызстана, готовых
						делиться знаниями и опытом. <br /> Единая площадка для наставников и
						учеников, чтобы облегчить им поиск друг друга.
					</p>
					<button className='font-medium text-xl bg-accent w-2/5 py-7 rounded-lg mb-52'>
						Найти ментора
					</button>
				</div>
				<Image
					src={rightImage}
					alt='right-image'
					priority
					className='absolute w-[33vw] right-0 top-0'
				/>
			</header>
			<div className='w-full bg-secondary'>
				<div className='w-container m-auto pt-[3.5rem] pb-28'>
					<h2 className='text-5xl font-semibold text-center  text-title mb-24'>
						Как это работает
					</h2>
					<div className='flex justify-between flex-wrap'>
						<div className='flex flex-col'>
							<Image src={HowItWork1} alt='how-it-work' className='mb-8' />
							<div className='flex flex-col w-[362px]'>
								<h4 className='text-2xl font-semibold tracking-wider text-title mb-4'>
									Выбери ментора
								</h4>
								<p className='text-xl text-little-text'>
									Можешь выбрать нужного человека по специальности, опыту работы
									и стоимости встречи.
								</p>
							</div>
						</div>
						<div className='flex flex-col'>
							<Image src={HowItWork2} alt='how-it-work' className='mb-8' />
							<div className='flex flex-col w-[362px]'>
								<h4 className='text-2xl font-semibold tracking-wider text-title mb-4'>
									Напиши ему
								</h4>
								<p className='text-xl text-little-text'>
									Оставь заявку на сайте. Напиши, с чем тебе нужна помощь и что
									бы ты хотел получить. Помни: хорошо сформулированная проблема
									— наполовину решённая проблема.
								</p>
							</div>
						</div>
						<div className='flex flex-col'>
							<Image src={HowItWork3} alt='how-it-work' className='mb-8' />
							<div className='flex flex-col w-[300px]'>
								<h4 className='text-2xl font-semibold tracking-wider text-title mb-4'>
									Дело за вами
								</h4>
								<p className='text-xl text-little-text'>
									Мы перешлём твою заявку ментору. Он оценит задачу и свяжется с
									тобой, чтобы обсудить детали и выбрать время. Каждый ментор
									сам определяет стоимость и длительность сессии.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-container py-[4.5rem] m-auto'>
				<div className='flex flex-col items-center'>
					<h2 className='text-5xl text-title font-bold tracking-widest mb-24'>
						Наши менторы
					</h2>
				</div>
				{/* <MentorItem /> */}
			</div>
		</main>
	)
}
