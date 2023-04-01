import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/images/Logo.svg'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { getUser } from '@/redux/apiCalls'
import { useEffect } from 'react'

const Navbar = () => {
	const { tokens, currentUser } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		getUser(dispatch, tokens.access)
	}, [])

	return (
		<nav className='w-full desktop:w-[1440px] m-auto py-8 flex justify-between px-20 my-4'>
			<div className=''>
				<Image src={Logo} alt='logo' priority />
			</div>
			{currentUser ? (
				<Image
					src={currentUser?.photo ? currentUser.photo : Logo}
					alt={currentUser?.email ? currentUser.email[0].toUpperCase() : 'Logo'}
					className='object-cover rounded-full w-16 h-16'
					width={64}
					height={64}
					priority
				/>
			) : (
				<div className='flex gap-x-9'>
					<Link href={''}>
						<button className='font-medium text-title text-base px-3 py-2 rounded-xl text-dark-blue text-center bg-accent'>
							Стать ментором
						</button>
					</Link>
					<Link href={''}>
						<button className='font-medium px-8 py-2 rounded-xl text-black text-base text-center bg-tertiary'>
							Войти
						</button>
					</Link>
				</div>
			)}
		</nav>
	)
}

export default Navbar
