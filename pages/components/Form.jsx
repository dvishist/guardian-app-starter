import axios from 'axios'
import { useRef, useState } from 'react'

export default function Form({ setResults, isLoading, setLoading }) {
	const [term, setTerm] = useState('')
	const [showRecent, setShowRecent] = useState(false)
	const submitButton = useRef(null)

	const doSearch = async () => {
		if (!term) return alert('Please enter a search term')

		setLoading(true)
		setResults([])
		const resultSet = await axios.get('/api/search', {
			params: {
				term: term,
				showRecent
			}
		})
		setResults(resultSet.data)
		setLoading(false)
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
			<button disabled={isLoading} onClick={() => doSearch()}>
				Search
			</button>
		</div>
	)
}
