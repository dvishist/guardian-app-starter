import React from 'react'
import ResultItem from './ResultItem'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Results({ results, isLoading }) {
	const classifiedResults = results.reduce((classified, result) => {
		if (classified[result.sectionId]) {
			classified[result.sectionId].push(result)
		} else {
			classified[result.sectionId] = [result]
		}
		return classified
	}, {})

	return (
		<div>
			<h2>Results</h2>
			{isLoading && <CircularProgress />}
			<div style={{ display: 'grid' }}>
				{results.map(result => (
					<ResultItem key={result.id} result={result} />
				))}
			</div>
		</div>
	)
}
