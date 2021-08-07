import React from 'react'
import ResultItem from './ResultItem'

export default function Results({ results }) {
	return (
		<div>
			<h2>Results</h2>
			{results.map(result => (
				<ResultItem key={result.id} result={result} />
			))}
		</div>
	)
}
