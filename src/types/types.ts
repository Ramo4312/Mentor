export interface IUser {
	email: string
	username: string
}

export interface IUserReg extends IUser {
	last_name: string
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
