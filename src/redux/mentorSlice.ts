import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
		requestStart: state => {
			state.isFetching = true
			state.error = false
		},
		requestSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		requestFailure: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const { requestStart, requestSuccess, requestFailure } =
	mentorSlice.actions
export default mentorSlice.reducer
