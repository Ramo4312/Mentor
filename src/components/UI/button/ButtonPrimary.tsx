import { IChildren } from '@/types/types'
import React, { FC } from 'react'

const ButtonPrimary: FC<IChildren> = ({ children }) => {
	return (
		<button className='bg-little-text py-2 rounded-[9px] px-5 text-white'>
			{children}
		</button>
	)
}

export default ButtonPrimary
