'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const TextInput = () => {
	const textAreaRef = useRef(null)
	const [textValue, setTextValue] = useState('')

	const rotateValue = Math.floor(Math.random() * 201) - 100

	return (
		<div className='w-screen p-5 flex flex-col'>
			<textarea
				className='opacity-0 w-0 h-0'
				onChange={(e) => setTextValue(e.target.value)}
				ref={textAreaRef}
			/>
			<div
				onClick={() => textAreaRef.current.focus()}
				className='min-h-60 bg-neutral-900 text-slate-100 whitespace-pre-wrap text-xl min-w-full p-5 overflow-x-hidden'
			>
				<AnimatePresence>
					{textValue.split('').map((l, i) => {
						return (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: 100, rotate: rotateValue }}
								animate={{ opacity: 1, y: 0, rotate: 0 }}
								exit={{
									opacity: 0,
									y: 100,
									rotate: -rotateValue,
									transition: {
										duration: 0.15,
									},
								}}
								transition={{ duration: 1, ease: 'easeIn' }}
								className={
									l !== '/n' ? 'inline-block mr-1' : 'inline bg-red-400'
								}
							>
								{l}
							</motion.span>
						)
					})}
				</AnimatePresence>
			</div>
		</div>
	)
}
