import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
	label: string
	state: string
	setState: Dispatch<SetStateAction<string>>
}

const BigInputs = ({ label, state, setState }: IProps) => {
	return (
		<div className='flex flex-col gap-y-[0.87rem]'>
			<label className='label-in-register' htmlFor=''>
				{label}
			</label>
			<textarea
				value={state}
				onChange={e => setState(e.target.value)}
				className='reg-inputs big-inputs outline-none'
			/>
		</div>
	)
}

export default BigInputs
