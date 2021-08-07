import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function ResultItem({ result }) {
	return (
		<div>
			<Card>
				<CardContent>
					<a href={result.url}>{result.title}</a>
				</CardContent>
			</Card>
		</div>
	)
}
