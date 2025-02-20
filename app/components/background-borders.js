import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MagnetWrapper } from './magnet-wrapper'

export const BackgroundBorders = () => {
	const [cursor, setCursor] = useState({ x: 0, y: 0 })
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const containerRef = useRef(null)
	const root = document.documentElement

	const handleMouse = (e) => {
		if (containerRef.current !== null) {
			const { height, width, left, top } =
				containerRef.current.getBoundingClientRect()

			// const randomx = e.clientX - container.left - container.width / 2
			// console.log(randomx)

			// const x = e.clientX - container.left
			// const y = e.clientX - container.left

			const x = e.clientX - (left + width / 2)
			const y = e.clientY - (top + height / 2)

			root.style.setProperty('--cursor-x', `${x}px`)
			root.style.setProperty('--cursor-y', `${y}px`)
			setCursor({ x, y })
		}
	}

	// const handleMouseMove = (e) => {
	// 	if (containerRef.current !== null) {
	// 		const { height, width, left, top } =
	// 			containerRef.current.getBoundingClientRect()
	// 		const x = e.clientX - (left + width / 2)
	// 		const y = e.clientY - (top + height / 2)
	// 		setPosition({ x, y })
	// 	}
	// }

	const handleMouseOut = () => {
		root.style.setProperty('--cursor-x', '50%')
		root.style.setProperty('--cursor-y', '50%')
	}

	return (
		<main
			ref={containerRef}
			className='h-screen w-screen bg-cyan-950 grid gap-y-8 place-content-center'
		>
			<MagnetWrapper>
				<button className='gradient-button inline-block bg-gray-700 rounded-md cursor-pointer relative p-2 uppercase'>
					<div className='neon absolute top-0 left-0 size-full blur rounded-md overflow-hidden'>
						<div className='gradient absolute -inset-52' />
					</div>
					<div className='grad-border absolute top-0 left-0 size-full rounded-md overflow-hidden'>
						<div className='gradient absolute -inset-52' />
					</div>
					<div className='p-4 relative bg-slate-800 rounded-md size-[98%] inline-flex justify-center items-center'>
						Climb
					</div>
				</button>
			</MagnetWrapper>

			<motion.button
				onMouseMove={handleMouse}
				onMouseLeave={handleMouseOut}
				animate={{ x: cursor.x, y: cursor.y }}
				className='gradient-button w-80 inline-block bg-gray-700 rounded-md cursor-pointer relative p-2 uppercase'
			>
				<div className='neon absolute top-0 left-0 size-full blur rounded-md overflow-hidden'>
					<div className='gradient-2 absolute -inset-52' />
				</div>
				<div className='grad-border absolute top-0 left-0 size-full rounded-md overflow-hidden'>
					<div className='gradient-2 absolute -inset-52' />
				</div>
				<div className='p-4 relative bg-slate-800 rounded-md size-[98%] inline-flex justify-center items-center'>
					Climb
				</div>
			</motion.button>
			<pre className='px-6 py-4 text-black font-thin text-center'>
				{cursor.x} : {cursor.y}
			</pre>
		</main>
	)
}
