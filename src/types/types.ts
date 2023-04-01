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
	payload: undefined | string | IFullUser | IUserReg
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
	username: string | undefined
	email: string | undefined
	password: string | undefined
	password_confirm: string | undefined
	image?: any
	photo?: string | undefined
	position: string | undefined
	place_of_work: string | undefined
	about_me: string | undefined
	help: string | undefined
	level_mentor: string | undefined
	experience: string | undefined
	specialization: string[] | undefined
	skills: string | undefined
	price: string | undefined
	language: string | undefined
}

export interface ISpec extends IOption {
	id: number
}

export interface IChildren {
	children: React.ReactNode
}

export interface ISpecializationsFilter {
	name: string
	specializations: string[]
}

export interface ISelectedData {
	expirience: string | undefined
	price: string | undefined
	language: string | undefined
}

// export interface ISortMentors {
// 	sortMentors: ISortMentor[]
// }

export interface ISortMentors {
	name: string
	options: string[]
}

export interface IMentee {
	email: string
	name: string
	description: string
	my_level: string
	telegram: string
}

export interface IRequest {
	accepted: boolean
	denied: boolean
}
