import { ILanguage, IOption, IPages, ISpec } from '@/types/types'

export const specializations: ISpec[] = [
	{ id: 6, value: 'Agile', label: 'Agile' },
	{ id: 7, value: 'Android', label: 'Android' },
	{ id: 8, value: 'Backend', label: 'Backend' },
	{ id: 9, value: 'Cloud', label: 'Cloud' },
	{ id: 10, value: 'Code Review', label: 'Code Review' },
	{ id: 11, value: 'Content/Copy', label: 'Content/Copy' },
	{ id: 12, value: 'Data Science/ML', label: 'Data Science/ML' },
	{ id: 13, value: 'Databases', label: 'Databases' },
	{ id: 14, value: 'Entrepreneurship', label: 'Entrepreneurship' },
	{ id: 15, value: 'Frontend', label: 'Frontend' },
	{ id: 16, value: 'HR', label: 'HR' },
	{ id: 17, value: 'iOS', label: 'iOS' },
	{ id: 18, value: 'Marketing', label: 'Marketing' },
	{ id: 19, value: 'Product Management', label: 'Product Management' },
	{ id: 20, value: 'Project Management', label: 'Project Management' },
	{ id: 21, value: 'QA', label: 'QA' },
	{ id: 22, value: 'System Design', label: 'System Design' },
	{ id: 23, value: 'Team Lead/Management', label: 'Team Lead/Management' },
	{ id: 24, value: 'UX/UI/Design', label: 'UX/UI/Design' },
	{ id: 25, value: 'Аналитика', label: 'Аналитика' },
	{ id: 26, value: 'Карьера', label: 'Карьера' },
	{ id: 27, value: 'Собеседования', label: 'Собеседования' },
	{ id: 28, value: 'Сети', label: 'Сети' },
]

export const pages: IPages[] = [
	{
		id: 1,
		text: 'Заявки',
		image: '/trending_arrow.svg',
		path: 'profile/my-requests',
		notifications: 12,
		image2: '/r/trending_arrow.svg',
	},
	{
		id: 2,
		text: 'Мои данные',
		image: '/star.svg',
		path: '/profile/my-profile',
		notifications: 0,
		image2: '/r/star.svg',
	},
	{
		id: 3,
		text: 'Настройки',
		image: '/settings.svg',
		path: '/profile/settings',
		notifications: 0,
		image2: '/r/settings.svg',
	},
	{
		id: 4,
		text: 'Выйти',
		path: '',
		image: '/exit.svg',
		notifications: 0,
		image2: '/r/exit.svg',
	},
]

export const prices: IOption[] = [
	{ value: 'Бесплатно', label: 'Бесплатно' },
	{ value: 'По договоренности', label: 'По договоренности' },
]

export const experience: IOption[] = [
	{ value: 'Нет опыта', label: 'Нет опыта' },
	{ value: '2-5', label: '2-5' },
	{ value: '5-10', label: '5-10' },
	{ value: '10+', label: '10+' },
]

export const skills: IOption[] = [
	{ value: 'JavaScript', label: 'JavaScript' },
	{ value: 'React', label: 'React' },
	{ value: 'Leadership', label: 'Leadership' },
	{ value: 'Code Review', label: 'Code Review' },
]

export const languages: ILanguage[] = [
	{ lang: 'Кыргызский/Русский', label: 'Оба языка', image: '' },
	{ lang: 'Кыргызский ', label: 'Кыргызский', image: '/kgz.svg' },
	{ lang: 'Русский', label: 'Русский', image: '/rus.svg' },
]
