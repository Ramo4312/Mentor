'use client'

import { forgotPassword } from '@/app/redux/apiCalls'
import AbsoluteImages from '@/components/absoluteImages'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import React, { useState } from 'react'

const PasswordRestore = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [isVisPassConf, setIsVisPassConf] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [emailValid, setEmailValid] = useState<boolean>(false)
	const [code, setCode] = useState<string>('')
	const [new_password, setNew_password] = useState<string>('')
	const [new_pass_confirm, setNew_pass_confirm] = useState<string>('')

	const dispatch = useAppDispatch()
	const { error } = useAppSelector(state => state.user)

	function handleSend() {
		if (!email.trim()) {
			alert('Some inputs are empty')
			return
		}

		forgotPassword(dispatch, email)
		if (!error) setEmailValid(true)
	}

	return (
		<div className=''>
			<div className=''></div>
			<Navbar />
			<div className='relative overflow-hidden text-center'>
				<AbsoluteImages />
				<div className=''>
					<h1 className='text-[3.44rem] text-center mt-11 mb-16 font-semibold text-title'>
						Восстановление пароля
					</h1>
					<form
						onSubmit={e => e.preventDefault()}
						className='flex flex-col gap-y-7 mx-auto w-[35.6rem]'
					>
						<div className='flex flex-col gap-y-7'>
							<div className='flex flex-col gap-y-3 text-start'>
								<label
									htmlFor=''
									className='text-little-text text-lg text-start'
								>
									Email
								</label>
								<input
									onChange={e => setEmail(e.target.value)}
									value={email}
									name='email'
									// placeholder='Email'
									className='reg-inputs w-full'
									type='text'
								/>
							</div>
							<button
								onClick={() => {
									handleSend()
								}}
								className={`px-[4.8rem] py-4 rounded-xl text-white text-xl text-center bg-little-text mx-auto ${
									emailValid ? 'hidden' : ''
								} `}
							>
								Отправить
							</button>
						</div>
						<div
							className={`${emailValid ? '' : 'hidden'} flex flex-col gap-y-7`}
						>
							<div className='flex flex-col gap-y-3 text-start'>
								<label
									htmlFor=''
									className='text-little-text text-lg text-start'
								>
									Введите код подтверждения
								</label>
								<input
									onChange={e => setCode(e.target.value)}
									value={code}
									name='code'
									className='reg-inputs w-full'
									type='text'
								/>
							</div>
							<div className='flex flex-col gap-y-3 text-start'>
								<label htmlFor='' className='text-little-text text-lg'>
									Введите новый пароль
								</label>
								<input
									onChange={e => setNew_password(e.target.value)}
									value={new_password}
									name='password'
									// placeholder='Password'
									className='reg-inputs'
									type={isVisPass ? 'text' : 'password'}
								/>
								<p
									className='pass-vis'
									onClick={() => setIsVisPass(!isVisPass)}
								>
									показать пароль
								</p>
							</div>
							<div className='flex flex-col gap-y-3 text-start'>
								<label htmlFor='' className='text-little-text text-lg'>
									Повторите пароль
								</label>
								<input
									onChange={e => setNew_pass_confirm(e.target.value)}
									value={new_pass_confirm}
									name='password'
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
							<button
								onClick={() => {
									handleSend()
								}}
								className='px-[4.8rem] mx-auto py-4 rounded-xl text-white text-xl text-center bg-little-text'
							>
								{/* Войти */}
								Войти
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default PasswordRestore
