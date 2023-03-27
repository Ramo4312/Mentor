import Navbar from '@/components/navbar/Navbar'
import SideBar from '@/components/sidebar'
// import { useAppDispatch } from '@/hooks/hooks'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import React, { useState, useId, useEffect } from 'react'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import Select, { OnChangeValue } from 'react-select'
import { experience, languages, prices, specializations } from '@/arrays/arrays'
import { getUser, userUpdate } from '@/redux/apiCalls'

import { IUser } from '.'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import DefaultInputs from '@/components/inputs/default'
import BigInputs from '@/components/inputs/big'
import { ILanguage, IOption, ISpec } from '@/types/types'

const ProfileEdit = () => {
	const tokens = useAppSelector(state => state.user.tokens)

	const [full_name, setFull_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password_confirm, setPassword_confirm] = useState<string>('')
	const [image, setImage] = useState<any>()
	const [post, setPost] = useState<string>('')
	const [place_of_work, setPlace_of_work] = useState<string>('')
	const [bio, setBio] = useState<string>('')
	const [help, setHelp] = useState<string>('')
	const [mentee_level, setMentee_level] = useState<string>('')
	const [exp, setExp] = useState('')
	const [spec, setSpec] = useState<string[]>([''])
	const [specId, setSpecId] = useState<number[]>([])
	const [skill, setSkill] = useState<string>('')
	const [price, setPrice] = useState('')
	const [language, setLanguage] = useState('')

	const [user, setUser] = useState<IUser | null>(null)

	// const router = useRouter()
	// const dispatch = useAppDispatch()
	const animatedComponents = makeAnimated()

	const dispatch = useAppDispatch()

	useEffect(() => {
		getUser(tokens?.access, setUser)
	}, [])

	useEffect(() => {
		if (user) {
			setFull_name(user.username)
			setEmail(user.email)
			setPassword(user.password)
			setPassword_confirm(user.password_confirm)
			// setImage(user.image)
			setPost(user.position)
			setPlace_of_work(user.place_of_work)
			setBio(user.about_me)
			setHelp(user.help)
			setMentee_level(user.level_mentor)
			setExp(user.experience)
			setSpec(user.specialization)
			// setSpecId(user.specId)
			setSkill(user.skills)
			setPrice(user.price)
			setLanguage(user.language)
		}
	}, [user])

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
		setSpecId((newValue as ISpec[]).map(v => v.id))
	}

	// const getValue4 = () => {
	// 	return price ? prices.find(c => c.value === price) : ''
	// }

	const onChange4 = (newValue: any) => {
		setPrice(newValue.value)
	}

	function handleEdit() {
		const formData = new FormData()
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
		formData.append('skills', skill)
		formData.append('price', price)
		formData.append('language', language)
		// formData.append('specialization', specId)

		userUpdate(dispatch, formData, tokens?.access)
	}

	return (
		<div>
			<Navbar />
			<div className='flex gap-x-28 items-start mt-16'>
				<div className='w-72'>
					<SideBar />
				</div>
				<div className='w-[46.6rem] pb-44'>
					<form
						onSubmit={e => e.preventDefault()}
						className='flex flex-col gap-y-5 mx-auto w-[46.88rem]'
					>
						<DefaultInputs
							label='ФИО'
							state={full_name}
							setState={setFull_name}
						/>
						<div className='flex flex-col gap-y-[0.87rem] w-96'>
							<label className='label-in-register'>
								Ваша фотография для профиля
							</label>
							<div className='relative'>
								<input
									type='file'
									className='file-input w-full h-full z-20 absolute bg-transparent opacity-0'
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
								Ваша специализация
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
								Навыки и технологии
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
								Стоимость консультации
							</label>
							<div className='relative '>
								<label className='w-full h-full absolute left-5 top-1 inline-block cursor-pointer'>
									{price}
								</label>
								<CreatableSelect
									instanceId={useId()}
									classNamePrefix='custom-select2 price-select'
									onChange={onChange4}
									// value={price}
									options={prices}
									placeholder=''
									components={animatedComponents}
									className='reg-select h-14'
									isClearable={true}
									isSearchable={true}
									closeMenuOnSelect={true}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-y-[0.87rem] mb-32'>
							<label htmlFor='label-in-register'>Выберите язык</label>
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
						<div className='flex justify-start'>
							<button
								className='mx-auto text-lg font-medium px-[3.825rem] py-6 rounded-xl text-paragraph bg-accent hover:bg-tertiary active:bg-active hover:duration-150 duration-200'
								onClick={handleEdit}
							>
								Сохранить
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ProfileEdit
