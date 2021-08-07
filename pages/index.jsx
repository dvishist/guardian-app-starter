import React, { useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'

const IndexPage = () => {
	const [results, setResults] = useState([])

	return (
		<div>
			<h1>Guardian Search</h1>
			<Form setResults={setResults} />
			<Results results={results} />
		</div>
	)
}

export default IndexPage
