import React from 'react'

export const Elipsis = ({ width, height, viewBox, cx, cy, r, transform }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'

			// class='circle-svg'
		>
			<circle
				cx={cx}
				cy={cy}
				r={r}
				transform={transform}
				stroke='#FFC6C6'
				// class='circle'
			/>
		</svg>
	)
}
