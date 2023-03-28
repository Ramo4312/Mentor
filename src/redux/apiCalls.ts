import {
	IDispatch,
	INewPassword,
	IPassToRestore,
	IRefresh,
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
	refreshStart,
	refreshSuccess,
	refreshFailure,
	logoutSuccess,
	updateStart,
	updateSuccess,
	updateFailure,
} from './userSlice'

// import { toast } from 'react-hot-toast'
import { Dispatch, SetStateAction } from 'react'
import { IProps, IUser } from '@/pages/profile/my-profile'

export const API = 'https://mentorkgapi.pythonanywhere.com/'

export const publicReq = axios.create({
	baseURL: API,
})

export const register = async (
	dispatch: Dispatch<IDispatch>,
	user: IUserReg,
	setModal: Dispatch<SetStateAction<boolean>>
) => {
	dispatch(registerStart())
	try {
		const res = await publicReq.post(`account/register/`, user)
		console.log(res.status, res.data)
		// toast.success('Вы успешно зарегистрировались', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
		dispatch(registerSuccess())
		setModal(true)
	} catch (err) {
		console.log(err)
		dispatch(registerFailure())
		// toast.error('Ошибка регистрации', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	}
}

export const login = async (
	dispatch: Dispatch<IDispatch>,
	user: IUserLog,
	router: any
) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`account/login/`, user)
		console.log('login', res.status)
		console.log(res.data)
		// toast.success('Вы успешно вошли', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
		localStorage.setItem('token', JSON.stringify(res.data))
		dispatch(loginSuccess({ ...res.data, email: user.email }))
		router.push('/profile/my-profile/')
	} catch (err) {
		dispatch(loginFailure())
		// toast.error('Ошибка входа', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	}
}

export const forgotPassword = async (
	dispatch: Dispatch<IDispatch>,
	email: { email: string },
	setEmailValid: Dispatch<SetStateAction<boolean>>
) => {
	dispatch(forgotStart())
	try {
		await publicReq.post(`account/restore-password/`, email)
		setEmailValid(true)
		dispatch(forgotSuccess())
	} catch (err) {
		dispatch(forgotFailure())
	}
}

export const restorePassword = async (
	dispatch: Dispatch<IDispatch>,
	newPassword: IPassToRestore,
	setError: Dispatch<SetStateAction<boolean>>
) => {
	dispatch(restoreStart())
	try {
		const res = await publicReq.post(
			`account/set-restored-password/`,
			newPassword
		)
		console.log('password restored', res.status)
		dispatch(restoreSuccess())
		setError(false)
		// toast.success('Пароль восстановлен', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	} catch (err) {
		dispatch(restoreFailure())
		console.log(1234)
		// toast.error('Пароль не восстанавливается', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	}
}

export const changePassword = async (
	dispatch: Dispatch<IDispatch>,
	newPassword: INewPassword,
	token: string | undefined
) => {
	dispatch(changeStart())

	const Authorization = `Bearer ${token}`

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
		// toast.success('пароль изменен', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	} catch (err) {
		dispatch(changeFailure())
		console.log(err)
		// toast.error('Ошибка смены пароля', {
		// 	style: {
		// 		borderRadius: '6px',
		// 		background: '#333',
		// 		color: '#fff',
		// 		padding: '20px auto',
		// 		fontSize: '20px',
		// 	},
		// })
	}
}

export const deleteAccount = async (
	dispatch: Dispatch<IDispatch>,
	user: IUserLog,
	token: string | undefined
) => {
	dispatch(deleteStart())

	try {
		const Authorization = `Bearer ${token}`

		const config = {
			headers: {
				Authorization: Authorization,
			},
		}

		const res = await publicReq.post(`account/delete-account/`, user, config)
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

export const logout = (dispatch: Dispatch<IDispatch>) => {
	dispatch(logoutSuccess())
}

export const getUser = async (
	token: string | undefined,
	setUser: Dispatch<SetStateAction<IUser | null>>,
	setError: Dispatch<SetStateAction<boolean>>
) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}

		const { data }: IProps = await publicReq(`base/personal-profile/`, config)

		setUser(data)
	} catch (err) {
		console.log(err)
		setError(true)
	}
}

export const userUpdate = async (
	dispatch: Dispatch<IDispatch>,
	user: FormData,
	token: string | undefined
) => {
	dispatch(updateStart())

	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}

		const res = await publicReq.patch(`account/update-user/`, user, config)

		dispatch(updateSuccess())

		console.log('user updated', res.status)
	} catch (err) {
		dispatch(updateFailure())
		console.log(err)
	}
}

export const codeActivate = async (
	code: { code: string },
	setError: Dispatch<SetStateAction<boolean>>
) => {
	try {
		const res = await publicReq.post(`account/activate/${code}/`)
	} catch (err) {
		console.log(err)
	}
}
