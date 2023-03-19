'use client'

import { register } from '@/app/redux/apiCalls'
import { useAppSelector } from '@/hooks/hooks'
import { IUserReg } from '@/types/types'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const RegisterPage = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [isVisPassConf, setIsVisPassConf] = useState<boolean>(false)
	const [username, setUsername] = useState<string>('')
	const [last_name, setLast_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password_confirm, setPassword_confirm] = useState<string>('')
	// const [user, setUser] = useState<IUserReg>({
	// username: '',
	// 	email: '',
	// 	last_name: '',
	// 	password: '',
	// 	password_confirm: '',
	// })

	const dispatch = useDispatch()
	const { error } = useAppSelector(state => state.user)

	// const router = useRouter()
	console.log(error)

	function handleRegister(e: any) {
		e.preventDefault()
		const user: IUserReg = {
			username,
			last_name,
			email,
			password,
			password_confirm,
		}

		register(dispatch, user)

		// error ? router.push('/account/login') : null
	}

	return (
		<div>
			<form
				onSubmit={e => e.preventDefault()}
				className='flex flex-col gap-y-5 mx-auto w-72'
			>
				<input
					onChange={e => setUsername(e.target.value)}
					name='username'
					placeholder='Username'
					className='reg-inputs'
					type='text'
				/>
				<input
					onChange={e => setLast_name(e.target.value)}
					name='last_name'
					placeholder='Full name'
					className='reg-inputs'
					type='text'
				/>
				<input
					onChange={e => setEmail(e.target.value)}
					name='email'
					placeholder='Email'
					className='reg-inputs'
					type='text'
				/>
				<div className='reg-inputs'>
					<input
						onChange={e => setPassword(e.target.value)}
						name='password'
						placeholder='Password'
						className=''
						type={isVisPass ? 'text' : 'password'}
					/>
					<img
						onClick={() => setIsVisPass(!isVisPass)}
						className='w-6 text-end'
						src={
							isVisPass
								? 'https://www.svgrepo.com/show/491155/visible.svg'
								: 'https://www.svgrepo.com/show/491289/not-visible.svg'
						}
						alt=''
					/>
				</div>
				<div className='reg-inputs'>
					<input
						onChange={e => setPassword_confirm(e.target.value)}
						name='password_confirm'
						placeholder='Password confirm'
						className=''
						type={isVisPassConf ? 'text' : 'password'}
					/>
					<img
						onClick={() => setIsVisPassConf(!isVisPassConf)}
						className='w-6 text-end'
						src={
							isVisPassConf
								? 'https://www.svgrepo.com/show/491155/visible.svg'
								: 'https://www.svgrepo.com/show/491289/not-visible.svg'
						}
						alt=''
					/>
				</div>
				<button
					onClick={e => {
						handleRegister(e)
					}}
					className='px-4 py-1 rounded-xl bg-slate-300'
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}

export default RegisterPage
