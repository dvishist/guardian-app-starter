import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function ResultItem({ result }) {
	var options = { year: 'numeric', month: 'long', day: 'numeric' }
	const date = new Date(result.date).toLocaleDateString('en-US', options)

	return (
		<div>
			<Card>
				<CardContent>
					<a href={result.url}>{result.title}</a>
					{` ${date}`}
				</CardContent>
			</Card>
		</div>
	)
}
