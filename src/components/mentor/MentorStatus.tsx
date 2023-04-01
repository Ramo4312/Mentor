import { useAppSelector } from '@/hooks/hooks'
import { IUser } from '@/pages/profile/my-profile'
import { getUser, userStatusUpdate } from '@/redux/apiCalls'
import React, { useEffect, useState } from 'react'

const MentorStatus = () => {
	const tokens = useAppSelector(state => state.user.tokens)
	const [error, setError] = useState(true)
	const [user, setUser] = useState<IUser | null>(null)
	const [status, setStatus] = useState(user?.status)
	useEffect(() => {
		getUser(tokens?.access, setUser, setError)
	}, [])
	// function changeStatus() {
	// 	if (user?.status) {
	// 		userStatusUpdate({ status: user?.status }, tokens.access)
	// 	} else if (user?.status === false) {
	// 		userStatusUpdate({ status: user?.status }, tokens.access)
	// 	}
	// }
	console.log(user)
	return (
		<div className='w-[21.5rem] bg-secondary py-[2.4rem] px-[2.6rem] rounded-[10px]'>
			<div className=' rounded-[10px] p-[0.9rem] bg-white mb-5'>
				Ваш статус: {user?.status ? '🟢 Активен' : ''}
			</div>
			<div className='text-little-text tracking-wider text-[0.9rem] mb-10'>
				Статус “<span className='text-[#FB4868]'>Активен</span>” означает, что
				вы открыты к заявкам от менти, а также двигает вашу карточку в верхние
				ряды на главной странице
			</div>
			<div className='text-little-text tracking-wider text-[0.9rem] mb-8'>
				Статус “<span className='text-[#FB4868]'>Не активен</span>” означает,
				что вы в данное время не принимаете заявки от менти, а также двигает
				вашу карточку в нижние ряды на главной странице
			</div>
			{user?.status ? (
				<button
					className='w-[8.4rem] py-[0.9rem] bg-little-text text-white rounded-[10px]'
					// onClick={changeStatus}
				>
					Не активен
				</button>
			) : (
				<button>активен</button>
			)}
		</div>
	)
}

export default MentorStatus
