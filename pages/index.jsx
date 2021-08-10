import React, { useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'

const IndexPage = () => {
	const [results, setResults] = useState([])
	const [isLoading, setLoading] = useState(false)

	return (
		<div>
			<h1>Guardian Search</h1>
			<Form setResults={setResults} setLoading={setLoading} isLoading={isLoading} />
			<Results results={results} isLoading={isLoading} />
		</div>
	)
}

export default IndexPage
