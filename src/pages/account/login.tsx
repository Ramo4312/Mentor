import { login } from '@/redux/apiCalls'
import AbsoluteImages from '@/components/absoluteImages'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useAppSelector } from '@/hooks/hooks'
import { IUserLog } from '@/types/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DefaultInputs from '@/components/inputs/default'
import PasswordInputs from '@/components/inputs/password'

const LoginPage = () => {
	const [isVisPass, setIsVisPass] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useDispatch()
	const { error } = useAppSelector(state => state.user)

	const router = useRouter()

	function handleLogin() {
		if (!email.trim() || !password.trim()) {
			alert('inputs are empty')
			return
		}

		const user: IUserLog = {
			email,
			password,
		}

		login(dispatch, user, router)
		// if (!error) router.replace('/')
	}

	// function handleRefresh() {
	// 	if (tokens) {
	// 		const token: { refresh: string } = {
	// 			refresh: tokens.refresh,
	// 		}

	// 		tokenRefresh(dispatch, token)
	// 	}
	// }

	return (
		<>
			<Navbar />
			<div className='relative overflow-hidden text-center'>
				<AbsoluteImages />
				<div className=''>
					<h1>Добро пожаловать</h1>
					<form
						onSubmit={e => e.preventDefault()}
						className='flex flex-col gap-y-7 mx-auto w-[35.6rem]'
					>
						<DefaultInputs state={email} setState={setEmail} label='Email' />
						<PasswordInputs
							state={password}
							setState={setPassword}
							label='Введите пароль'
							passVis={isVisPass}
							setPassVis={setIsVisPass}
						/>
						<Link
							href={'/account/password/restore'}
							className='mb-[4.5rem] font-semibold underline hover:text-sky-600 inline-block text-left'
						>
							забыли пароль?
						</Link>
						<div className='flex justify-between'>
							<button
								onClick={() => {
									handleLogin()
								}}
								className='px-[4.8rem] py-4 rounded-xl text-white text-xl text-center bg-little-text hover:text-little-text hover:bg-tertiary active:bg-active hover:duration-150 duration-200'
							>
								{/* Войти */}
								Войти
							</button>
							<Link
								href={''}
								// onClick={e => {
								// 	handleLogin(e)
								// }}
								className='px-[4.8rem] py-4 rounded-xl text-dark-blue text-xl text-center bg-accent hover:bg-tertiary active:bg-active hover:duration-150 duration-200'
							>
								{/* Войти */}
								Стать ментором
							</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default LoginPage
