import { IMentor } from '@/types/mentor.interface'
import axios from 'axios'

export const API = 'https://mentorkgapi.pythonanywhere.com'

axios.defaults.baseURL = API

export const MentorService = {
	async getAll() {
		const { data } = await axios.get<IMentor[]>('/base/mentors')
		return data
	},
	async getById(id: number) {
		const { data } = await axios.get<IMentor>(`/base/public-profile/${id}`)
		return data
	},
	async getUserByID(id: number) {
		const { data } = await axios.get<any>(`/statement/statements/${id}`)
		return data
	},
}
