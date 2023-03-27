export interface IUser {
	email: string
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

export interface IOption {
	label: string
	value: string
}

export interface IDispatch {
	payload: undefined | string | IFullUser
	type: string
}

export interface IPages {
	id: number
	text: string
	image: string
	path: string
	notifications?: number
	image2: string
}

export interface ILanguage {
	lang: string
	image: string
	label: string
}

export interface IPhoto {
	name: string
	lastModifiedDate: Date
	lastModified: number
	size: number
	webkitRelativePath: string
}

export interface IUserReg {
	full_name: string
	email: string
	password: string
	password_confirm: string
	downloadURL: string
	post: string
	place_of_work: string
	bio: string
	help: string
	mentee_level: string
	exp: string
	spec: string[]
	skill: string[]
	price: string
	language: string
}

export interface ISpec extends IOption {
	id: number
}
