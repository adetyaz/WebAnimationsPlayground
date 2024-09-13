'use client'
import { motion, useAnimate, useInView } from 'framer-motion'
import { Pointer } from 'lucide-react'
import { useState, useEffect } from 'react'

export const ComplexButton = () => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	const [isCursorLoaded, setIsCursorLoaded] = useState(false)
	const [isSubscribed, setIsSubscribed] = useState(false)

	const buttonTextAnimation = async () => {
		await animate(
			'#subscribe',
			{
				opacity: 0,
				y: 20,
			},
			{
				duration: 0.5,
				ease: 'easeOut',
			}
		)

		await animate(
			'#subscribed',
			{
				opacity: 1,
				y: -20,
				display: 'inline',
			},
			{
				duration: 0.5,
			}
		)
	}

	useEffect(() => {
		if (isSubscribed) {
			buttonTextAnimation()
		}
	}, [isSubscribed])

	const cursorAnimation = async () => {
		await animate(
			'#cursor',
			{
				opacity: [0, 1],
				x: [100, -10],
				y: [100, 30],
			},
			{
				duration: 1,
			}
		)
		await animate(
			'#cursor',
			{
				scale: 0.9,
			},
			{
				delay: 0.05,
				repeat: 1,
				repeatType: 'reverse',
				onComplete() {
					setIsSubscribed(true)
				},
			}
		)
		await animate(
			'#cursor',
			{
				opacity: [0, 1],
				x: [-10, 30],
				y: [30, 80],
			},
			{
				duration: 1,
			}
		)
	}

	const buttonAnimation = async () => {
		await animate(
			'#subscribeButton',
			{
				boxShadow: '5px 5px 0 rgba(0, 0, 0, .9)',
			},
			{
				delay: 0.4,
				duration: 0.1,
			}
		)

		await animate(
			'#subscribeButton',
			{
				boxShadow: '2px 2px 0 rgba(0, 0, 0, .9)',
			},
			{ delay: 0.5, repeat: 1, repeatType: 'reverse' }
		)
		await animate('#subscribeButton', {
			backgroundColor: '#4338ca',
		})
	}

	useEffect(() => {
		if (isInView) {
			buttonAnimation()
			cursorAnimation()
		}
	}, [isInView])

	return (
		<main className='h-screen flex items-center justify-center' ref={scope}>
			<button
				id='subscribeButton'
				className='bg-rose-700 border border-rose-950 w-80 h-16 flex flex-col justify-center text-4xl font-bold tracking-tight text-neutral-100'
			>
				<span className='w-full' id='subscribe'>
					Subscribe
				</span>
				<motion.span
					className='w-full'
					initial={{ opacity: 0, display: 'none' }}
					id='subscribed'
				>
					Subscribed
				</motion.span>
			</button>

			<img
				src='/cursor.svg'
				id='cursor'
				className='w-16 h-16 absolute'
				onLoad={() => setIsCursorLoaded(true)}
				style={{ display: 'block' }}
			/>
		</main>
	)
}
