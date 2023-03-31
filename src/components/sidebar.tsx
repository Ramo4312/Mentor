'use client'

import { pages } from '@/arrays/arrays'
// import { useAppDispatch } from '@/hooks/hooks'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import LogoutModal from './logoutModal'

const SideBar = () => {
	const [modal, setModal] = useState<boolean>(false)

	const pathname = usePathname()
	const router = useRouter()

	function handleLogout() {
		setModal(true)
	}

	return (
		<>
			<LogoutModal modal={modal} setModal={setModal} />
			<div className='w-72 py-28 bg-secondary rounded-[0.63rem] fixed'>
				<ul className='flex flex-col gap-y-[1.13rem]'>
					{pages?.map(item => (
						<li
							key={item.id}
							className='flex justify-between items-center py-[0.44rem] pr-5 cursor-pointer'
							onClick={() => {
								item.text !== 'Выйти' ? router.push(item.path) : handleLogout()
							}}
						>
							<div
								className={`${
									pathname !== item.path ? 'pl-6' : ''
								} flex gap-x-4`}
							>
								<div
									className={`${
										pathname == item.path ? '' : 'hidden'
									} w-2 h-7 bg-paragraph rounded-r-lg`}
								></div>
								<img
									src={pathname == item.path ? item.image2 : item.image}
									alt={item.text}
									className={`${
										item.image == '/trash.svg' || item.image2 == '/r/trash.svg'
											? 'ml-[.1rem] mr-[.15rem]'
											: ''
									}`}
								/>
								<p
									className={`${
										pathname == item.path ? 'text-paragraph' : 'text-[#737373]'
									} hover:text-[#485174] text-xl font-normal hover:font-medium`}
								>
									{item.text}
								</p>
							</div>
							<p
								className={`${
									item.notifications !== 0 ? '' : 'hidden'
								} rounded-full text-tertiary bg-little-text text-xs font-bold py-1 px-[5px] flex items-center justify-center`}
							>
								{item.notifications}
							</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default SideBar
