'use client'

import { register } from '@/app/redux/apiCalls'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { IUserReg } from '@/types/types'
import React, { useRef, useState } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { specializations } from '@/arrays/arrays'
import Image from 'next/image'
import AbsoluteImages from '@/components/absoluteImages'
import { useRouter } from 'next/navigation'

interface IPhoto {
	name: string
	lastModifiedDate: Date
	lastModified: number
	size: number
	webkitRelativePath: string
}

const RegisterPage = () => {
	const [page, setPage] = useState<string>('')
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [isVisPassConf, setIsVisPassConf] = useState<boolean>(false)
	const [image, setImage] = useState<File | IPhoto | null>()
	const [full_name, setFull_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password_confirm, setPassword_confirm] = useState<string>('')
	const [language, setLanguage] = useState<string>('')

	const filePicker = useRef<null>(null)
	const router = useRouter()

	const dispatch = useAppDispatch()
	const { error } = useAppSelector(state => state.user)

	const animatedComponents = makeAnimated()

	// function handlePick() {
	// 	filePicker.current.click()
	// }

	function handleRegister() {
		const user: IUserReg = {
			full_name,
			email,
			password,
			password_confirm,
		}

		register(dispatch, user)

		error ? router.push('/account/login') : null
	}

	const languages: { lang: string; image: string }[] = [
		{ lang: 'Оба языка', image: '' },
		{ lang: 'Кыргызский ', image: '/kgz.svg' },
		{ lang: 'Русский ', image: '/rus.svg' },
	]

	return (
		<>
			<Navbar />
			<div className='relative overflow-hidden'>
				<AbsoluteImages page={page} />
				<div className=''>
					<h1 className='text-[3.44rem] text-center mt-11 mb-8 font-semibold text-title'>
						Стань частью нашей <br /> команды
					</h1>
					<h6 className='bg-[#E3F6F580] w-[43.44rem] mx-auto rounded-2xl mb-20 px-4 py-[2.13rem] text-lg leading-7 text-paragraph font-normal text-center'>
						Помогать другим – почётно и круто. Спасибо, что хотите этим <br />
						заниматься.Заполните форму ниже, и мы обязательно рассмотрим вашу{' '}
						<br />
						заявку как можно скорее.
					</h6>
					<form
						onSubmit={e => e.preventDefault()}
						className='flex flex-col gap-y-5 mx-auto w-[46.88rem]'
					>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register uppercase' htmlFor=''>
								фио
							</label>
							<input
								onChange={e => setFull_name(e.target.value)}
								name='username'
								className='reg-inputs'
								type='text'
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Email
							</label>
							<input
								onChange={e => setEmail(e.target.value)}
								name='email'
								className='reg-inputs'
								type='text'
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Пароль
							</label>
							<input
								onChange={e => setPassword(e.target.value)}
								name='password'
								className='reg-inputs'
								type={isVisPass ? 'text' : 'password'}
							/>
							<p className='pass-vis' onClick={() => setIsVisPass(!isVisPass)}>
								показать пароль
							</p>
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Повтор пароля
							</label>

							<input
								onChange={e => setPassword_confirm(e.target.value)}
								name='password_confirm'
								className='reg-inputs'
								type={isVisPassConf ? 'text' : 'password'}
							/>
							<p
								className='pass-vis'
								onClick={() => setIsVisPassConf(!isVisPassConf)}
							>
								показать пароль
							</p>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] w-96'>
							<label className='label-in-register'>
								Ваша фотография для профиля
							</label>
							<div className='relative'>
								<input
									type='file'
									className='file-input w-full h-full z-20 absolute bg-transparent opacity-0'
									ref={filePicker}
									accept='image/*,.png,.jpg,.web'
									size={2}
									onChange={e =>
										setImage(e.target.files ? e.target.files[0] : null)
									}
								/>
								<div className='flex justify-between cursor-pointer bg-[#E3F6F5] pl-7 pr-3 py-4 rounded-md'>
									<p
										className={`${
											image ? 'text-black' : ''
										} text-[#485174B2] text-lg`}
									>
										{image ? image.name : 'Attach file'}
									</p>
									<Image
										width={28}
										height={28}
										src='/attachment_24px.svg'
										alt=''
										className='w-7'
									/>
									{image ? (
										<Image
											onClick={() => setImage(null)}
											src='/trash-icon.svg'
											alt=''
											width={22}
											height={22}
											className='absolute -right-11 hover:scale-125 hover:duration-100 duration-200'
										/>
									) : (
										''
									)}
								</div>
							</div>
							<p className='text[#485174B2] '>(пожалуйста, не более 2Мб)</p>
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Должность
							</label>
							<input type='text' className='reg-inputs' />
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Место работы
							</label>
							<input type='text' className='reg-inputs' />
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								О себе
							</label>
							<textarea className='reg-inputs big-inputs outline-none' />
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								С чем вы можете помочь?
							</label>
							<textarea className='reg-inputs big-inputs outline-none' />
						</div>
						<div className='flex flex-col gap-y-[0.87rem]'>
							<label className='label-in-register' htmlFor=''>
								Какого уровня менти могут обращаться к вам за помощью?
							</label>
							<textarea className='reg-inputs big-inputs outline-none' />
						</div>
						<div className='flex flex-col gap-y-[0.87rem] w-[30.38rem] mb-12'>
							<label htmlFor='' className='label-in-register'>
								Опыт
							</label>
							<Select components={animatedComponents} />
						</div>
						<div className='flex flex-col gap-y-[0.87rem] mb-11 w-[30.38rem]'>
							<label htmlFor='' className='flex flex-col gap-y-1 w-[89%]'>
								<span className='mb-[1.63rem] leading-[1.63rem] text-xl text-paragraph font-medium'>
									Ваша специализация
								</span>{' '}
								<p className='font-light leading-5 text-base'>
									Здесь вам нужно указать основную вашу текущую специализацию и
									ту, в которой вы хорошо разбираетесь и готовы оказать помощь.
									До 5 тегов. По ним вас будут находить при использовании тегов
									в поисковом блоке. Они также будут видны в вашем профиле.
								</p>
							</label>
							<Select
								components={animatedComponents}
								isMulti={true}
								options={specializations}
								className=' h-14'
								// classNamePrefix='select'
								isClearable={true}
								isSearchable={true}
								closeMenuOnSelect={true}
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] mb-14'>
							<label htmlFor='' className='flex flex-col gap-y-1 w-[89%]'>
								<span className='mb-[1.63rem] leading-[1.63rem] text-xl text-paragraph font-medium'>
									Навыки и технологии
								</span>{' '}
								<p className='font-light leading-5 text-base'>
									Перечислите через запятую навыки, по которым хотите
									консультировать. Например: JavaScript, React, Leadership, Code
									Review. По ним менти смогут вас найти.
								</p>
							</label>
							<Select
								components={animatedComponents}
								// isMulti={true}
								// options={options}
								className='spec-select bg-transparent'
								// classNamePrefix='select'
								// isClearable={true}
								// isSearchable={true}
								// closeMenuOnSelect={true}
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] w-[30.38rem] mb-14'>
							<label htmlFor='' className='flex flex-col gap-y-1 w-[89%]'>
								<span className='mb-[1.63rem] leading-[1.63rem] text-xl text-paragraph font-medium'>
									Стоимость консультации
								</span>{' '}
								<p className='font-light leading-5 text-base'>
									Во сколько вы оцениваете час консультации. Если цена зависит
									от случая, выберите “По договорённости”
								</p>
							</label>
							<Select
								components={animatedComponents}
								isMulti={true}
								// options={specializations}
								className='reg-select h-14'
								// classNamePrefix='select'
								isClearable={true}
								isSearchable={true}
								closeMenuOnSelect={true}
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] mb-32'>
							<label htmlFor='label-in-register'>Выберите язык</label>
							<div className='flex flex-col gap-y-[0.62rem] '>
								{languages.map((item: { lang: string; image: string }) => (
									<div
										className='border border-[#73737380] rounded-md flex justify-between py-2 px-6 w-[22.5rem]'
										key={item.lang}
										onClick={() => setLanguage(item.lang)}
									>
										<div
											className={`${
												item.lang == 'Оба языка' ? 'ml-14 py-2' : ''
											} flex items-center gap-x-4`}
										>
											{item.image ? (
												<Image src={item.image} width={37} height={37} alt='' />
											) : null}
											<p>{item.lang}</p>
										</div>
										<Image
											src={
												language == item.lang
													? '/checked.svg'
													: '/no-checked.svg'
											}
											alt=''
											width={20}
											height={20}
										/>
									</div>
								))}
							</div>
						</div>
						<button
							onClick={() => {
								handleRegister()
							}}
							className='mx-auto text-lg font-medium px-[3.825rem] py-6 rounded-xl text-paragraph bg-accent'
						>
							Оставить заявку
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default RegisterPage
