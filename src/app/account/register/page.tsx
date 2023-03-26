'use client'

import { register } from '@/app/redux/apiCalls'
import { useAppDispatch } from '@/hooks/hooks'
import { ILanguage, IOption, IPhoto, ISpec } from '@/types/types'
import React, { useState, useId } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Select, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import { experience, languages, prices, specializations } from '@/arrays/arrays'
import Image from 'next/image'
import AbsoluteImages from '@/components/absoluteImages'
import CreatableSelect from 'react-select/creatable'

import '@/styles/custom-select.scss'
import DefaultInputs from '@/components/inputs/default'
import PasswordInputs from '@/components/inputs/password'
import BigInputs from '@/components/inputs/big'

const RegisterPage = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [isVisPassConf, setIsVisPassConf] = useState<boolean>(false)

	const [full_name, setFull_name] = useState<string>('qwerty')
	const [email, setEmail] = useState<string>('qwerty')
	const [password, setPassword] = useState<string>('qwerty')
	const [password_confirm, setPassword_confirm] = useState<string>('qwerty')
	const [image, setImage] = useState<File | IPhoto | null | undefined | Blob>()
	const [post, setPost] = useState<string>('qwerty')
	const [place_of_work, setPlace_of_work] = useState<string>('qwerty')
	const [bio, setBio] = useState<string>('qwerty')
	const [help, setHelp] = useState<string>('qwerty')
	const [mentee_level, setMentee_level] = useState<string>('qwerty')
	const [exp, setExp] = useState('qwerty')
	const [spec, setSpec] = useState<string[]>([''])
	const [specId, setSpecId] = useState<string[]>([])
	const [skill, setSkill] = useState<string>('')
	const [price, setPrice] = useState('qwerty')
	const [language, setLanguage] = useState('qwerty')

	// const router = useRouter()

	const dispatch = useAppDispatch()
	// const { error } = useAppSelector(state => state.user)

	const animatedComponents = makeAnimated()

	console.log(specId)

	function handleRegister() {
		const formData: any = new FormData()
		formData.append('username', full_name)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password_confirm', password_confirm)
		formData.append('image', image)
		formData.append('position', post)
		formData.append('place_of_work', place_of_work)
		formData.append('about_me', bio)
		formData.append('help', help)
		formData.append('level_mentor', mentee_level)
		formData.append('experience', exp)
		formData.append('specialization', specId)
		formData.append('skills', skill)
		formData.append('price', price)
		formData.append('language', language)

		// console.log(formData)
		register(dispatch, formData)

		// error ? router.push('/account/login') : null
	}

	const getValue1 = () => {
		return exp ? experience.find(c => c.value === exp) : ''
	}

	const onChange1 = (newValue: any) => {
		if (newValue.value !== 'Нет опыта') {
			setExp(newValue.value + ' ' + 'лет')
		} else {
			setExp(newValue.value)
		}
	}

	const getValue2 = () => {
		return spec ? specializations.filter(c => spec.indexOf(c.value) >= 0) : []
	}

	const onChange2 = (newValue: OnChangeValue<IOption, boolean>) => {
		// if (spec.length >= 5) return
		setSpec((newValue as IOption[]).map(v => v.value))
		setSpecId((newValue as ISpec[]).map(v => v.id.toString()))
	}

	const onChange4 = (newValue: any) => {
		setPrice(newValue.value)
	}

	return (
		<>
			<Navbar />
			<div className='relative overflow-hidden'>
				<AbsoluteImages />
				<div className=''>
					<h1>
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
						<DefaultInputs
							label='ФИО'
							state={full_name}
							setState={setFull_name}
						/>
						<DefaultInputs label='Email' state={email} setState={setEmail} />
						<PasswordInputs
							label='Пароль'
							state={password}
							setState={setPassword}
							passVis={isVisPass}
							setPassVis={setIsVisPass}
						/>
						<PasswordInputs
							label='Повтор пароля'
							state={password_confirm}
							setState={setPassword_confirm}
							passVis={isVisPassConf}
							setPassVis={setIsVisPassConf}
						/>
						<div className='flex flex-col gap-y-[0.87rem] w-96'>
							<label className='label-in-register'>
								Ваша фотография для профиля
							</label>
							<div className='relative'>
								<input
									type='file'
									className='file-input w-full h-full z-20 absolute bg-transparent opacity-0'
									// ref={filePicker}
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
						<DefaultInputs label='Должность' state={post} setState={setPost} />
						<DefaultInputs
							label='Место работы'
							state={place_of_work}
							setState={setPlace_of_work}
						/>
						<BigInputs label='О себе' state={bio} setState={setBio} />
						<BigInputs
							label='С чем вы можете помочь?'
							state={help}
							setState={setHelp}
						/>
						<BigInputs
							label='Какого уровня менти могут обращаться к вам за помощью?'
							state={mentee_level}
							setState={setMentee_level}
						/>
						<div className='flex flex-col gap-y-[0.87rem] w-[30.38rem] mb-12'>
							<label htmlFor='' className='label-in-register'>
								Опыт
							</label>
							<Select
								instanceId={useId()}
								classNamePrefix='custom-select'
								onChange={onChange1}
								isSearchable={false}
								value={getValue1()}
								options={experience}
								placeholder=''
							/>
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
								instanceId={useId()}
								classNamePrefix='custom-select1'
								onChange={onChange2}
								value={getValue2()}
								placeholder=''
								isMulti
								components={animatedComponents}
								options={specializations}
								className=' h-14'
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
							<input
								onChange={e => setSkill(e.target.value)}
								value={skill}
								name='username'
								className='reg-inputs'
								type='text'
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
							<CreatableSelect
								instanceId={useId()}
								classNamePrefix='custom-select2'
								onChange={onChange4}
								// value={getValue4()}
								options={prices}
								placeholder=''
								components={animatedComponents}
								className='reg-select h-14'
								isClearable={true}
								isSearchable={true}
								closeMenuOnSelect={true}
							/>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] mb-32'>
							<label htmlFor='label-in-register'>
								Выберите язык на котором можете <br /> консультировать (можно
								оба)
							</label>
							<div className='flex flex-col gap-y-[0.62rem] '>
								{languages.map((item: ILanguage) => (
									<div
										className='border border-[#73737380] rounded-md flex justify-between py-2 px-6 w-[22.5rem]'
										key={item.lang}
										onClick={() => setLanguage(item.lang)}
									>
										<div
											className={`${
												item.label == 'Оба языка' ? 'ml-14 py-2' : ''
											} flex items-center gap-x-4`}
										>
											{item.image ? (
												<Image src={item.image} width={37} height={37} alt='' />
											) : null}
											<p>{item.label}</p>
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
							className='mx-auto text-lg font-medium px-[3.825rem] py-6 rounded-xl text-paragraph bg-accent hover:bg-tertiary active:bg-active hover:duration-150 duration-200'
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
