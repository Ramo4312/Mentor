import {
	IDispatch,
	INewPassword,
	IRefresh,
	IToken,
	IUserLog,
	IUserReg,
} from '@/types/types'
import axios from 'axios'
import { Dispatch } from 'react'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerFailure,
	registerStart,
	registerSuccess,
	restoreFailure,
	restoreStart,
	restoreSuccess,
	forgotStart,
	forgotSuccess,
	forgotFailure,
	changeStart,
	changeSuccess,
	changeFailure,
	deleteStart,
	deleteSuccess,
	deleteFailure,
	refreshStart,
	refreshSuccess,
	refreshFailure,
} from './userSlice'

const API = 'http://getservices.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: API,
})

export const register = async (
	dispatch: Dispatch<IDispatch>,
	user: IUserReg
) => {
	dispatch(registerStart())
	try {
		const res = await publicReq.post(`account/register/`, user)
		console.log(res.status, res.data)
		dispatch(registerSuccess())
	} catch (err) {
		console.log(err)
		dispatch(registerFailure())
	}
}

export const login = async (dispatch: Dispatch<IDispatch>, user: IUserLog) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`account/login/`, user)
		console.log('login', res.status)
		console.log(res.data)
		dispatch(loginSuccess({ ...res.data, email: user.email }))
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const forgotPassword = async (
	dispatch: Dispatch<IDispatch>,
	email: string
	// setEmailValid: SetStateAction<false | true>
) => {
	dispatch(forgotStart())
	try {
		await publicReq.post(`account/restore-password/`, email)
		dispatch(forgotSuccess())
		// setEmailValid(true)
	} catch (err) {
		dispatch(forgotFailure())
	}
}

export const restorePassword = async (
	dispatch: Dispatch<IDispatch>,
	newPassword: INewPassword
) => {
	dispatch(restoreStart())
	try {
		const res = await publicReq.post(
			`account/set-restored-password/`,
			newPassword
		)
		console.log('password restored', res.status)
		dispatch(restoreSuccess())
	} catch (err) {
		dispatch(restoreFailure())
	}
}

export const changePassword = async (
	dispatch: Dispatch<IDispatch>,
	newPassword: INewPassword,
	token: IToken | null
) => {
	dispatch(changeStart())

	const Authorization = `Bearer ${token?.access}`

	const config = {
		headers: {
			Authorization: Authorization,
		},
	}

	try {
		const res = await publicReq.post(
			`account/change-password/`,
			newPassword,
			config
		)
		dispatch(changeSuccess())
		console.log('password changed', res.status, res.statusText)
	} catch (err) {
		dispatch(changeFailure())
		console.log(err)
	}
}

export const deleteAccount = async (
	dispatch: Dispatch<IDispatch>,
	user: IUserLog,
	token: IToken | null
) => {
	dispatch(deleteStart())

	try {
		const Authorization = `Bearer ${token?.access}`

		const config = {
			headers: {
				Authorization: Authorization,
			},
		}

		const res = await publicReq.delete(`account/delete-account/${user}`, config)
		dispatch(deleteSuccess())

		console.log('account deleted', res.status, res.statusText)
	} catch (err) {
		dispatch(deleteFailure())
	}
}

export const tokenRefresh = async (
	dispatch: Dispatch<IDispatch>,
	token: IRefresh
) => {
	dispatch(refreshStart())

	try {
		const res = await publicReq.post(`account/token/refresh/`, token)
		dispatch(refreshSuccess(res.data))
	} catch (err) {
		dispatch(refreshFailure())
	}
}
