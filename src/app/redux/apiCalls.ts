import {
	INewPassword,
	IRefresh,
	IToken,
	IUserLog,
	IUserReg,
} from '@/types/types'
import axios from 'axios'
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
	logout,
} from './userSlice'

const API = 'http://localhost:8000/'

export const publicReq = axios.create({
	baseURL: API,
})

export const register = async (dispatch: any, user: IUserReg) => {
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

export const login = async (dispatch: Function, user: IUserLog) => {
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
	dispatch: Function,
	email: string,
	setEmailValid: Function
) => {
	dispatch(forgotStart())
	setEmailValid(true)
	try {
		await publicReq.post(`account/restore-password/`, email)
		dispatch(forgotSuccess())
	} catch (err) {
		dispatch(forgotFailure())
	}
}

export const restorePassword = async (
	dispatch: Function,
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
		// let newUser = {
		// 	email: user.email,
		// 	password: user.password,
		// }
		// login(dispatch, newUser, navigate)
	} catch (err) {
		dispatch(restoreFailure())
	}
}

export const changePassword = async (
	dispatch: Function,
	newPassword: INewPassword,
	token: IToken | null
) => {
	dispatch(changeStart())

	const Authorization = `Bearer ${token?.access}`

	let config = {
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

export const deleteAccount = async (dispatch: Function, email: string) => {
	dispatch(deleteStart())

	let user: Object = {
		email: email,
	}

	try {
		const res = await publicReq.delete(`account/delete-account/`, user)
		dispatch(deleteSuccess())

		console.log('account deleted', res.status, res.statusText)
	} catch (err) {
		dispatch(deleteFailure())
	}
}

export const tokenRefresh = async (dispatch: Function, token: string) => {
	dispatch(deleteStart())

	let tokenToRefresh: Object = {
		refresh: token,
	}

	try {
		const res = await publicReq.delete(`account/token/refresh/`, tokenToRefresh)
		dispatch(deleteSuccess())
	} catch (err) {
		dispatch(deleteFailure())
	}
}
