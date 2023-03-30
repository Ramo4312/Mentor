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

export interface IPassToRestore {
	email: string
	code: string
	new_password: string
	new_pass_confirm: string
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
	username: string
	email: string
	password: string
	password_confirm: string
	image?: any
	photo?: string
	position: string
	place_of_work: string
	about_me: string
	help: string
	level_mentor: string
	experience: string
	specialization: string[]
	skills: string
	price: string
	language: string
}

export interface ISpec extends IOption {
	id: number
}

export interface IMentee {
	email: string
	name: string
	description: string
	my_level: string
	telegram: string
}
