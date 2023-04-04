import { publicReq } from '@/redux/apiCalls'
import { IMentor } from '@/types/mentor.interface'

export const MentorService = {
	async getAll() {
		const { data } = await publicReq<IMentor[]>('/base/mentors')
		return data
	},
	async getById(id: number) {
		const { data } = await publicReq<IMentor>(`/base/public-profile/${id}`)
		return data
	},
}
