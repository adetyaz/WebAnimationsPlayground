'use client'
import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react'

export const AnimationControl = () => {
	const controls = useAnimationControls()

	const handleClick = () => {
		controls.start('animate')
	}

	return (
		<div>
			<motion.button
				className='bg-blue-700 py-4 px-8 rounded cursor-pointer mb-2'
				onClick={handleClick}
				layout
			>
				Flip Me
			</motion.button>

			<motion.div
				variants={{
					initial: { rotate: 0, scale: 0 },
					animate: { rotate: '720deg', scale: 1 },
				}}
				initial='initial'
				animate={controls}
				transition={{ duration: 1 }}
				className='size-32 bg-red-700 '
			></motion.div>
		</div>
	)
}
