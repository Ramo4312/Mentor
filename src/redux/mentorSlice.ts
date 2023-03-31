import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

interface initialState {
	isFetching: boolean
	error: boolean
}

export const mentorSlice = createSlice({
	name: 'user',
	initialState: <initialState>{
		isFetching: false,
		error: false,
	},
	reducers: {
		writingStart: state => {
			state.isFetching = true
			state.error = false
		},
		writingSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		writingFailure: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const { writingStart, writingSuccess, writingFailure } =
	mentorSlice.actions
export default mentorSlice.reducer
