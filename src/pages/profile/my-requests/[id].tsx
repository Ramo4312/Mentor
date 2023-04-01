import { useAppSelector } from '@/hooks/hooks'
import { MentorService } from '@/pages/services/car.services'
import { acceptRequest, deniedRequest } from '@/redux/apiCalls'
import { IMentorSingle } from '@/types/mentor.interface'
import { IRequest } from '@/types/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Dispatch, FC, SetStateAction, useState } from 'react'

interface IModal {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}

const UserModal: FC = ({ mentor }: any) => {
	const [modal, setModal] = useState<boolean>(true)
	console.log(mentor)
	const user = {
		name: 'Евгений Леонтьев',
		email: 'evgeniy00Leon@gmail.com',
		telegram: '@Gfdugarrd',
		description:
			'Помогите разобраться с тем, как искать работу, куда ходить, куда не ходить, что спросить, перед тем как согласиться, про карьерные треки, возможности и прочие HR штуки.',
		my_level: 'Junior',
	}

	const access = useAppSelector(state => state.user.tokens.access)

	function handleClick() {
		const request: any = {
			accepted: true,
			denied: false,
		}
		acceptRequest(mentor.id, request, access)
	}

	function handleClick2() {
		const request: any = {
			accepted: true,
			denied: false,
		}
		deniedRequest(mentor.id, request, access)
	}

	return (
		<div
			className={`${
				modal
					? 'z-1 opacity-100 backdrop-blur-[9px] duration-200'
					: '-z-1 opacity-0'
			} w-full h-full bg-[rgb(227,246,245,.9)] fixed top-0 flex duration-200 justify-center items-center`}
			// onClick={() => setModal(false)}
		>
			<div className='w-3/4 py-[4.5rem] px-[13.875rem] bg-white rounded-2xl flex flex-col items-center'>
				<div className='flex flex-col gap-y-3 text-center mb-8'>
					<h3 className='text-[#272343] font-semibold text-[25px]'>
						{user.name}
					</h3>
					<h4 className='text-[#086CB7] text-xl font-normal'>{user.email}</h4>
					<h4 className='text-little-text text-xl font-normal'>
						Telegram{' '}
						{user.telegram[0] == '@' ? user.telegram : `@${user.telegram}`}
					</h4>
				</div>
				<p className='px-14 py-10 text-left mb-10'>{user.description}</p>
				<div className='flex gap-x-10 mb-[4.375rem] items-center'>
					<p className='text-paragraph text-lg font-medium'>Мой уровень</p>
					<p className='text-[#272343] text-xl font-medium py-[14px] px-[45px] rounded-full bg-tertiary'>
						{user.my_level}
					</p>
				</div>
				<div className='flex gap-x-11'>
					<button className='accent-btn' onClick={handleClick}>
						Принять заявку
					</button>
					<button className='little-text-btn' onClick={handleClick2}>
						Отказать
					</button>
				</div>
			</div>
		</div>
	)
}

interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const mentors = await MentorService.getAll()
	return {
		paths: mentors.map(mentor => ({
			params: {
				id: String(mentor.id),
			},
		})),

		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
	const mentor = await MentorService.getUserByID(Number(params?.id))

	return {
		props: { mentor },
	}
}

export default UserModal
