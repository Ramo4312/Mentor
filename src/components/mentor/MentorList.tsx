import { IMentorData } from '@/types/mentor.interface'
import React, { FC } from 'react'
import MentorItem from './MentorItem'

const MentorList: FC<IMentorData> = ({ mentors }) => {
	return (
		<div className='flex flex-wrap gap-6'>
			{mentors.map(mentor => (
				<MentorItem key={mentor.id} mentor={mentor} />
			))}
		</div>
	)
}

export default MentorList
