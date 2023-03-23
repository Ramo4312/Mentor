'use client'

import React, { SetStateAction } from 'react'

interface StateProps {
	modal: boolean
	setModal: SetStateAction<boolean | undefined>
}

export default function RequestModal({ modal, setModal }: StateProps) {
	return (
		<div
			className={`${
				modal
					? 'z-1 opacity-100 backdrop-blur-[9px] duration-200'
					: '-z-1 opacity-0'
			} w-full h-full bg-[rgba(179,179,179,0.4)] fixed top-0 flex duration-200 justify-center items-center`}
			onClick={() => setModal(false)}
		>
			<div
				onClick={e => e.stopPropagation()}
				className='w-[53.4rem] h-[25.4rem] text-center rounded-2xl bg-secondary py-12 px-36'
			>
				<h3 className='text-2xl text-paragraph font-semibold'>
					Ваша заявка принята!
				</h3>
				<p className='mt-11 mb-14 text-xl text-little-text font-medium'>
					Уведомление о приеме/отказе, вашей заявки <br /> ментором придет на
					почту. <br />
					если хотите получить уведомление также в телеграм, <br /> то пройдите
					по ссылке и активируйте Бот нажатием <br /> кнопки
				</p>
				<button
					onClick={() => {
						setModal(!true)
						window.open('https://t.me/SaveYoutubeBot')
					}}
					className='bg-little-text px-14 py-3 rounded-[0.63rem] text-xl text-[#fffffe]'
				>
					Start
				</button>
			</div>
		</div>
	)
}
