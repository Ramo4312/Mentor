import { usePathname } from 'next/navigation'
import React, { FC, PropsWithChildren } from 'react'
import Navbar from '../navbar/Navbar'
import SideBar from '../sidebar'

const LayoutAccount: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<>
			<Navbar />
			<div
				className={`flex ${
					pathname === '/profile/my-requests' ? '' : 'gap-x-28'
				} items-start mt-16`}
			>
				<div className='w-72'>
					<SideBar />
				</div>
				{children}
			</div>
		</>
	)
}

export default LayoutAccount
