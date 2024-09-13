'use client'
import { motion, MotionConfig } from 'framer-motion'

export const Gestures = () => {
	return (
		<div className='grid gap-6'>
			<MotionConfig
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					whileHover={{
						scale: 1.2,
						background: 'grey',
					}}
					whileTap={{ scale: 0.95 }}
					className='bg-blue-700 py-4 px-8 rounded cursor-pointer'
				>
					Click Me
				</motion.button>
				<motion.button
					whileHover={{
						scale: 1.2,
						background: 'grey',
					}}
					whileTap={{ scale: 0.95, rotate: '2.3deg' }}
					className='bg-amber-700 py-4 px-8 rounded cursor-pointer'
				>
					Don't Click Me
				</motion.button>
			</MotionConfig>
		</div>
	)
}
