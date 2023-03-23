import React from 'react'

interface PageProps {
	page?: string
}

const AbsoluteImages = ({ page }: PageProps) => {
	return (
		<div className=''>
			<img
				className='absolute -left-[10.2rem]'
				src={
					page == 'register'
						? '/2 Creative run 1.png'
						: '/2 Creative run 1-1.png'
				}
				alt=''
			/>
			<img
				className='absolute -right-[9rem]'
				src={page == 'register' ? '/6 progress 2.png' : '/6 progress 2-1.png'}
				alt=''
			/>
		</div>
	)
}

export default AbsoluteImages
