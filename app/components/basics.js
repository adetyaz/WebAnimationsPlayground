'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const Basics = () => {
	const [visible, setVisible] = useState()
	return (
		<div>
			<motion.button
				className='bg-blue-700 py-4 px-8 rounded cursor-pointer'
				onClick={() => setVisible(!visible)}
				layout
			>
				Click Me
			</motion.button>
			<AnimatePresence mode='popLayout'>
				{visible && (
					<motion.div
						initial={{ rotate: 0, scale: 0, y: 0 }}
						animate={{ rotate: '45deg', scale: 1, y: [50, -50, 120, 0] }}
						exit={{ rotate: '-10deg', scale: 0, y: 0 }}
						className='size-32 bg-red-700 '
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
