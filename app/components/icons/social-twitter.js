import React from 'react'

export const SocialTwitter = ({ className }) => {
	return (
		<svg
			width='78'
			height='78'
			viewBox='0 0 78 78'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlns:xlink='http://www.w3.org/1999/xlink'
			className={className}
		>
			<g filter='url(#filter0_d_1_29477)'>
				<rect x='10' y='6' width='58' height='58' rx='29' fill='white' />
				<rect
					x='10.4'
					y='6.4'
					width='57.2'
					height='57.2'
					rx='28.6'
					stroke='#D96A47'
					stroke-width='0.8'
				/>
				<rect
					x='27.5'
					y='24'
					width='23'
					height='22'
					fill='url(#pattern0_1_29477)'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_1_29477'
					x='0'
					y='0'
					width='78'
					height='78'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='5' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_1_29477'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_1_29477'
						result='shape'
					/>
				</filter>
				<pattern
					id='pattern0_1_29477'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'
				>
					<use
						xlink:href='#image0_1_29477'
						transform='matrix(0.00498188 0 0 0.00520833 -0.00815217 0)'
					/>
				</pattern>
				<image
					id='image0_1_29477'
					width='204'
					height='192'
					xlink:href={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAYAAABI4IyJAAAVnUlEQVR4Xu2dW6xWxRXHUYtWDvWUtrbEigq2VUxLTUyMD6V98c1LgyaYltAQ8YHSBxMC8qIptokJLcU2oElNak2QeCvFmPRBaUkrSb1EkwYrFKOgOQlSUVrEgsjFrv/JTDues2fN3mv2/r797e9PcqI5Z8/eM7+ZNbNmzVprpkzhPxIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARJogsAZTby06XeuXbt25b333rtixowZ/w6+FbZlYrs+TtSp0t+PHz9+zpw5c9546qmnbpw2bdrxptvb5vcfPHjwc9ddd90fjhw5cp6rJ9h7/uB6xu7duy+TPlu1evXqX7S5LZ2t2759+2YtWLDg99JAdEjffiC4nYVcomFHjx49e+HChY+l+mDlypU/k0nm7BKv5CNNEdi+ffv8uXPnvprqrKb+PnXq1I9lldm7devWG5pqY5vfe/jw4WnLly/fCL5gEeMsAvXooUOHPtPmtgxN3dwMr3ZYUwLj3ysr3VZZ8S4YGujSUFlZpm7cuPGHM2fOfFfji9Vnz549lw4Tm1a3FbPcokWLNqVmuSaFBnsYCK4MooHcD1o6GKuqrO67i7j61ebaa6/d9vLLL3/T8n6WaZCAzGBzpJNOlxEKdKYMcNOPpnZg8Mggur7BZrbm1RCWq6+++kVNWObPn79DVObvyL5laCaR1nRQmYo88MADS9GBEIaY4GgDvoywpd4LI4QI78Vl6juoz8iKMU+E4VmNl6hp+zdt2vT9QW1jqt6fSj0wCH+/5ZZbHnnttde+tm7dujtEMKacOHFiUrXxOwzqm266acuxY8fOlQe02S80M48/NzY2Nmvz5s0/2Lt37yXhy/23ZOZdcM011/xV1MRfjo6OnhwEblXqKPu0C1esWLFmx44d82PlxMx/6M477/zpzTff/MTixYurvJ7P9poAVLOYXu1nROjV+/fv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Jjcv22MD+FyYpys2CJAWaVBUDcTfeFOzskF/HMYNa3fJPm9tTCg9w7q9ta11ZbkaCWDFQBLuxIz8do5fVo3VLf0qLXYmyDiDFLWm5BbYB2nJzfENOGiK8F5WutJ8sN0EEJ0IV/iYeuEH1iD6S7nYmegqgDaLavZOzkSAg93UZAMDiTWtbbtHz5DVDgMKd65g4GgXs2I/0JazlqpdhKQVMQfN0K3H6gMXxs7EVmgIJZObV+25lj0vwjKi5S/2gwnnMXA9aVn1K1WnTAQlkpvDI7vSi93DSG6eCnugg6aFbIvKwKway6rvVxtYeTAYWlRtc1XKTA49SG5+H70AzF3Yv4LOkfDdIhXCrywIQc7JvtK/1hV/GauHqEb7Y3s19/uT1tgZn9wc6peimh2kata2kZGoDza44iT4liYsyIo/KObjKvhdOtnC/ZrnAQfNKu8Mn3VhzbhYNhpwBgfNtp9jWdvfuXIuruMlbZbFDNlFYfGd6QPhtAPHHC8Al9z8WW1CgmsOM2i2XLzgypLyPsbsJwPqNlFfOps+CJZB2aA/2OQqoMXOhMnNkQix5cNmOKuH2cx78cYGis9NbA3lHSSyLs7neW2ldQaPC3GoWfBzjvzubPeD//fPnOt/J0L5G3n/pHDukH+XVvJWxHfUMQhhlVm/fv3t999//49EDZly4sSJSa/F75cuXfrrxYsXP+Rc+uv4dGvfcdVVV+0Ui9ivVq1atf7AgQMziyq6bdu264XLyXnz5v1N/h5LcI69yqS/jYyMHJGJZyQGwPfDPffc82OZzJbMnj17rLWwhqliSJpdJiFdl8zHZftXzpZGUxk0NbUt929eNUNy87J15nMNE4Au7e9wnLjJDc3HdSQKb7gpjbweG3QtTRMYYWBX+fFlNKOCFzY6aDbSrbaXQj+WDjmVmglFWK6wfaEbpeCgmUrWl2Jo/XvgmvMiM870cTw5V/3dRR2JTuLM9v/OKZPc3CoQVco5y10fR82QfhquLFqmFy8soq7dOqSIJjUbKmnK47jK4Lc8K6rzIcbO9HhEYllPpU5FZ8IQwDOAT3YOPCDg4WAZ7HWVwT2edd6l08vhZ7onsZcVnPgt+Ept2LDh9p07d14pq4i3HYft+FiemSYm1ZeWLVu2cXR09Fg/69vGb8NBc2xsDDdB9/IfTNPj/3z/rF69el0vK8BvkQAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJkAAJ9JjAfwFkvp9jRFmtVwAAAABJRU5ErkJggg==`}
				/>
			</defs>
		</svg>
	)
}
