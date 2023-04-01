import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/images/Logo.svg'
import { useAppSelector } from '@/hooks/hooks'
import Avatar from '@/images/avatar.jpg'
import { useRouter } from 'next/router'

const Navbar = () => {
	const user: any = useAppSelector(state => state.user.currentUser)
	const { push } = useRouter()
	console.log(user)
	return (
		<nav className='w-full desktop:w-[1440px] m-auto py-8 flex justify-between px-20 my-4'>
			<div className='flex items-center'>
				<Image src={Logo} alt='logo' priority />
			</div>
			{user?.email ? (
				<Image
					src={Avatar}
					alt='avatar'
					width={64}
					height={64}
					priority
					onClick={() => push('/profile/my-profile')}
					className='cursor-pointer'
				/>
			) : (
				<div className='flex gap-x-9'>
					<Link href='/account/register/'>
						<button className='font-medium text-title text-base px-3 py-2 rounded-xl text-dark-blue text-center bg-accent'>
							Стать ментором
						</button>
					</Link>
					<Link href='/account/login/'>
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
