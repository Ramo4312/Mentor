'use client'

import { login } from '@/app/redux/apiCalls'
import { IUserLog } from '@/types/types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useDispatch()

	function handleLogin(e: any) {
		let user: IUserLog = {
			username,
			email,
			password,
		}

		login(dispatch, user)
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
				<button
					onClick={e => {
						handleLogin(e)
					}}
					className='px-4 py-1 rounded-xl bg-slate-300'
				>
					Войти
				</button>
			</form>
		</div>
	)
}

export default LoginPage
