import { devLvl } from '@/arrays/arrays'
import Footer from '@/components/footer/Footer'
import BigInputs from '@/components/inputs/big'
import DefaultInputs from '@/components/inputs/default'
import Navbar from '@/components/navbar/Navbar'
import { useAppDispatch } from '@/hooks/hooks'
import { request } from '@/redux/apiCalls'
import { IMentee } from '@/types/types'
import Image from 'next/image'
import React, { useId, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import Select from 'react-select'
import RequestModal from './modal'

const Request = () => {
	const [modal, setModal] = useState<boolean>(false)

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [my_level, setMy_level] = useState('')
	const [telegram, setTelegram] = useState('')

	const dispatch = useAppDispatch()

	function handleSend() {
		if (
			!email.trim() ||
			!name.trim() ||
			!description.trim() ||
			!my_level.trim() ||
			!telegram.trim()
		) {
			toast.error('Некоторые поля пусты', {
				style: {
					borderRadius: '6px',
					background: '#333',
					color: '#fff',
					padding: '20px auto',
					fontSize: '20px',
				},
			})
			return
		}

		const mentee: IMentee = {
			email,
			name,
			description,
			my_level,
			telegram,
		}

		request(dispatch, mentee, setModal)
	}

	const getValue = () => {
		return my_level ? devLvl.find(c => c.value === my_level) : ''
	}

	const onChange = (newValue: any) => {
		setMy_level(newValue.value)
	}

	return (
		<div>
			<Navbar />
			<Toaster />
			<RequestModal modal={modal} setModal={setModal} />
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
					className='flex flex-col items-start gap-y-8 w-[35.57rem]'
					onSubmit={e => e.preventDefault()}
				>
					<DefaultInputs state={email} label='Email' setState={setEmail} />
					<DefaultInputs
						state={name}
						label='Ваше имя и фамилия'
						setState={setName}
					/>
					<BigInputs
						state={description}
						label='О чём хотите поговорить?'
						setState={setDescription}
					/>
					<div className='flex flex-col gap-y-[0.87rem] w-full mb-12'>
						<label htmlFor='' className='label-in-register'>
							Как вы оцениваете свой уровень?
						</label>
						<Select
							classNamePrefix='custom-select2'
							isClearable
							instanceId={useId()}
							options={devLvl}
							onChange={onChange}
							value={getValue()}
						/>
					</div>
					<DefaultInputs
						state={telegram}
						label='Telegram @username'
						setState={setTelegram}
					/>
					<button
						onClick={handleSend}
						className='bg-accent rounded-lg py-[1.57rem] px-14 text-lg font-medium hover:bg-tertiary active:bg-active hover:duration-150 duration-200 text-[#2D334A]'
					>
						Оставить заявку
					</button>
				</form>
			</div>
			<Footer />
		</div>
	)
}

export default Request
