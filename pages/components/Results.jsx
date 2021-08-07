import React from 'react'
import ResultItem from './ResultItem'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Results({ results, isLoading }) {
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
