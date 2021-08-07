import axios from 'axios'
import { useState } from 'react'

export default function Form({ setResults, setLoading }) {
	const [term, setTerm] = useState('')
	const [showRecent, setShowRecent] = useState(false)

	const doSearch = async () => {
		if (!term) return alert('Please enter a search term')

		setLoading(true)
		axios
			.get('/api/search', {
				params: {
					term: term,
					showRecent
				}
			})
			.then(resultSet => {
				setResults(resultSet.data)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<div>
			<label>
				<input
					name='showRecent'
					type='checkbox'
					checked={showRecent}
					onChange={() => {
						setShowRecent(showRecent => !showRecent)
					}}
				/>
				Show Recent
			</label>
			<br />
			<input value={term} onChange={evt => setTerm(evt.target.value)} />
			<button onClick={() => doSearch()}>Search</button>
		</div>
	)
}
