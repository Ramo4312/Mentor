import { IRequest } from '@/types/mentor.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

interface initialState {
	isFetching: boolean
	request: IRequest[]
	error: boolean
}

export const mentorSlice = createSlice({
	name: 'user',
	initialState: <initialState>{
		isFetching: false,
		request: [],
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
		getRequestSuccess: (state, action) => {
			state.request = action.payload
		},
	},
})

export const {
	requestStart,
	requestSuccess,
	requestFailure,
	getRequestSuccess,
} = mentorSlice.actions
export default mentorSlice.reducer
