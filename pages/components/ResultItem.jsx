import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function ResultItem({ result }) {
	var options = { year: 'numeric', month: 'long', day: 'numeric' }
	const date = new Date(result.date).toLocaleDateString('en-US', options)

	return (
		<div style={{ margin: '2px' }}>
			<Card>
				<CardContent>
					<img height='40' width='40' src={result.thumbnail} />
					<a href={result.url}>{result.title}</a>
					{` ${date}`}
				</CardContent>
			</Card>
		</div>
	)
}
