import { IUserLog, IUserReg } from '@/types/types'
import axios from 'axios'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerFailure,
	registerStart,
	registerSuccess,
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
		dispatch(loginSuccess({ ...res.data, email: user.email }))
	} catch (err) {
		dispatch(loginFailure())
	}
}
