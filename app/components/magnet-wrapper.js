import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export const MagnetWrapper = ({ children }) => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
	const ref = useRef(null)

	const handleMouseMovement = (e) => {
		const { clientX, clientY } = e
		const { height, width, left, top } = ref.current.getBoundingClientRect()

		const x = clientX - (left + width / 2)
		const y = clientY - (top + height / 2)
		setCursorPosition({ x, y })
	}

	const handleReset = () => {
		setCursorPosition({ x: 0, y: 0 })
	}

	const { x, y } = cursorPosition
	return (
		<motion.div
			ref={ref}
			className='relative'
			animate={{ x, y }}
			transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
			onMouseLeave={handleReset}
			onMouseMove={handleMouseMovement}
		>
			{children}
		</motion.div>
	)
}
