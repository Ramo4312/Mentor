import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/Logo.svg'

const Navbar = () => {
	return (
		<nav className='w-full desktop:w-[1440px] m-auto py-8 flex justify-between px-20 my-4'>
			<div className=''>
				<Image src={Logo} alt='logo' priority />
			</div>
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
		</nav>
	)
}

export default Navbar
