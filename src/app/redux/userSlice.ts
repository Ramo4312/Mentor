'use client'

import { IFullUser, IToken, IUser } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

interface initialState {
	currentUser: IUser | null
	tokens: IToken | null
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

		restoreStart: state => {
			state.isFetching = true
			state.error = false
		},
		restoreSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		restoreFailure: state => {
			state.isFetching = false
			state.error = true
		},

		forgotStart: state => {
			state.isFetching = true
			state.error = false
		},
		forgotSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		forgotFailure: state => {
			state.isFetching = false
			state.error = true
		},

		changeStart: state => {
			state.isFetching = true
			state.error = false
		},
		changeSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		changeFailure: state => {
			state.isFetching = false
			state.error = true
		},

		deleteStart: state => {
			state.isFetching = true
			state.error = false
		},
		deleteSuccess: state => {
			state.isFetching = false
			state.currentUser = null
			state.tokens = null
			state.error = false
		},
		deleteFailure: state => {
			state.isFetching = false
			state.error = true
		},

		logout: state => {
			state.isFetching = false
			state.error = false
			state.currentUser = null
			state.tokens = null
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
	restoreStart,
	restoreSuccess,
	restoreFailure,
	forgotStart,
	forgotSuccess,
	forgotFailure,
	changeStart,
	changeSuccess,
	changeFailure,
	deleteStart,
	deleteSuccess,
	deleteFailure,
	logout,
} = userSlice.actions
export default userSlice.reducer
