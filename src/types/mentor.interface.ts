export interface IMentor {
	id: number
	username: string
	photo: string
	position: string
	place_of_work: string
	about_me: string
	help: string
	level_mentor: string
	experience: string
	skills: string
	status: string
	price: string
	language: string
	specialization: string[]
}

export interface IMentorData {
	mentors: IMentor[]
}

export interface IMentorSingle {
	mentor: IMentor
}
