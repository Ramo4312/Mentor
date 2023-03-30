import { IMentorData } from '@/types/mentor.interface'
import { useState } from 'react'

// import { Mentor } from '../types/Mentor'
// import { fetchMentors } from '../api/mentors'

function Mentors({ mentors }: IMentorData) {
	const [query, setQuery] = useState('')
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const filteredMentors = mentors
		.filter(mentor => {
			// Фильтруем по категориям
			if (selectedCategories.length > 0) {
				return mentor.specialization.some(category =>
					selectedCategories.includes(category)
				)
			} else {
				return true
			}
		})
		.filter(mentor => {
			// Фильтруем по запросу
			if (query.length > 0) {
				const mentorName =
					`${mentor.firstName} ${mentor.lastName}`.toLowerCase()
				return mentorName.includes(query.toLowerCase())
			} else {
				return true
			}
		})

	const specialization = [
		'frontend',
		'backend',
		'fullstack',
		// Добавляем другие категории по желанию
	]

	function handleCategorySelect(category: string) {
		setSelectedCategories(prevSelectedCategories => {
			if (prevSelectedCategories.includes(category)) {
				return prevSelectedCategories.filter(c => c !== category)
			} else {
				return [...prevSelectedCategories, category]
			}
		})
	}

	return (
		<div>
			<div>
				<input
					type='text'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<button onClick={() => setQuery('')}>Очистить</button>
			</div>
			<div>
				{specialization.map(category => (
					<button
						key={category}
						onClick={() => handleCategorySelect(category)}
						className={selectedCategories.includes(category) ? 'selected' : ''}
					>
						{category}
					</button>
				))}
				<button onClick={() => setSelectedCategories([])}>Сбросить</button>
			</div>
			<ul>
				{filteredMentors.map(mentor => (
					<li key={mentor.id}>
						<h2>
							{mentor.firstName} {mentor.lastName}
						</h2>
						<p>{mentor.bio}</p>
						<p>{mentor.specialization.join(', ')}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Mentors
