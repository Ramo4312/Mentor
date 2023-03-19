'use client'

import { IFullUser, IUser, IUserLog } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

interface initialState {
	currentUser: IUser | null
	tokens: { access: string; refresh: string } | null
	isFetching: boolean
	error: boolean
}

export const userSlice = createSlice({
	name: 'user',
	initialState: <initialState>{
		currentUser: {},
		tokens: {},
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: state => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action: PayloadAction<IFullUser>) => {
			state.isFetching = false
			state.tokens = {
				access: action.payload.access,
				refresh: action.payload.refresh,
			}
			state.currentUser = {
				email: action.payload.email,
				username: action.payload.username,
			}
			state.error = false
		},
		loginFailure: state => {
			state.isFetching = false
			state.error = true
		},

		registerStart: state => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		registerFailure: state => {
			state.isFetching = false
			state.error = true
		},

		refreshStart: state => {
			state.isFetching = true
			state.error = false
		},
		refreshSuccess: (state, action: PayloadAction<string>) => {
			state.isFetching = false
			if (state.tokens) {
				state.tokens.access = action.payload
			}
			state.error = false
		},
		refreshFailure: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	registerStart,
	registerSuccess,
	registerFailure,
	refreshStart,
	refreshSuccess,
	refreshFailure,
} = userSlice.actions
export default userSlice.reducer
