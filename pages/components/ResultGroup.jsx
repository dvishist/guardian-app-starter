import React from 'react'
import ResultItem from './ResultItem'

export default function ResultGroup({ results }) {
	return (
		<div>
			<h3>{results[0].sectionName}</h3>
			{results.map(result => (
				<ResultItem key={result.id} result={result} />
			))}
		</div>
	)
}
