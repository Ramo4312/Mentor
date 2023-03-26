import Image from 'next/image'
import React from 'react'

interface IMentor {
	image: string
	name: string
	desc: string
	experience: string
	price: string
	status: string
}

const MentorItem = () => {
	const mentor: IMentor = {
		image:
			'https://getmentor.dev/_next/image?url=https%3A%2F%2Fgetmentor.blob.core.windows.net%2Fmentor-images%2Fvictoria-dronova-154%2Flarge&w=3840&q=75',
		name: 'Victoria Dronova',
		desc: 'Ex- Google: Head of Operations and Maps projects, Now: Digital transformation program manager @ Food Lion',
		experience: '😎 10+ лет опыта',
		price: '💰 По договоренности',
		status: '🟢 Активна',
	}
	return (
		<div className='bg-secondary w-[26rem] p-[1.4rem] rounded-xl'>
			<Image
				src={mentor.image}
				alt='mentor'
				// className='w-full h-[12rem]'
				width={368}
				height={197}
			/>
		</div>
	)
}

export default MentorItem
