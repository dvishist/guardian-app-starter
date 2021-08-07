import axios from 'axios'
import { useState } from 'react'

export default function Form({ setResults }) {
	const [term, setTerm] = useState('')
	const [showRecent, setShowRecent] = useState(false)

	const doSearch = async () => {
		if (!term) alert('Please enter a search term')
		const resultSet = await axios.get('/api/search', {
			params: {
				term: term,
				showRecent
			}
		})
		setResults(resultSet.data)
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
