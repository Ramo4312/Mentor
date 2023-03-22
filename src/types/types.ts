export interface IUser {
	email: string
}

export interface IUserReg extends IUser {
	full_name: string
	password: string
	password_confirm: string
}

export interface IUserLog extends IUser {
	password: string
}

export interface IFullUser extends IUser {
	access: string
	refresh: string
}

export interface IRefresh {
	refresh: string
}

export interface IToken extends IRefresh {
	access: string
}

export interface INewPassword {
	old_password: string
	new_password: string
	new_pass_confirm: string
}

export interface ISpecs {
	label: string
	value: string
	id: number
}

export interface IDispatch {
	payload: undefined | string | IFullUser
	type: string
}
