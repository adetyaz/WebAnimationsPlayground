import React from 'react'

export const SizesandText = () => {
	return (
		<div className='w-screen'>
			<h1 className='title bg-red-600'>random title</h1>
			<p
				className='bg-emerald-700'
				style={{
					fontSize: 'clamp(.1rem, 2vw,  8rem)',
					// fontSize: '2rem',
				}}
			>
				foreign set of words that is complete in itself, typically containing a
				subject and predicate, conveying a statement, question, exclamation, or
				command, and consisting of a main clause and sometimes one or more
				subordinate clauses.
			</p>
		</div>
	)
}
