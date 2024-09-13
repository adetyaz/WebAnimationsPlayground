'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const ViewBasedAnimations = () => {
	const ref = useRef()
	const isInView = useInView(ref, { once: true })

	return (
		<div className='w-screen'>
			<div className='h-[150vh]  bg-fuchsia-500' />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className='bg-red-600 h-screen'
			></motion.div>
			<div
				ref={ref}
				className={isInView ? 'bg-yellow-950' : 'bg-emerald-600'}
				style={{ height: '100vh', transition: '3s background' }}
			/>
		</div>
	)
}
