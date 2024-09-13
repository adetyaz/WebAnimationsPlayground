'use client'
import { motion, useAnimationControls } from 'framer-motion'
import { neueMachina, neueMachinaLight } from '../fonts'
import Image from 'next/image'
import { useMousePosition } from '../utils/useMousePosition'
import {
	LightTone,
	Elipsis,
	LeftSpring,
	RightSpring,
	SocialFacebook,
	SocialInstagram,
	ScreenCursor,
} from '../components'

export default function SocialSelling() {
	const { x, y } = useMousePosition()

	const controls = useAnimationControls()

	const handleHover = () => {
		controls.start('animate')
		console.log('yellow')
	}

	return (
		<main
			className={`${neueMachina.className} bg-[#FFFFF3] text-black min-h-dvh pt-8 px-14 
      overflow-hidden

      `}
		>
			<motion.div
				animate={{
					x: x - 80,
					y: y - 50,
				}}
				transition={{
					type: 'just',
					duration: 0.1,
					ease: [0.34, 1.56, 0.64, 1],
				}}
				className='absolute size-16 bg-gray-900 rounded-full opacity-80 backdrop-invert z-50'
			/>
			<header className='flex justify-between'>
				<Image src={'/images/e-logo.png'} height={20} width={30} alt='logo' />
				<motion.button
					onMouseEnter={handleHover}
					className='bg-[#D96A47] py-2 px-6 text-sm text-white transition-shadow duration-150 shadow-custom-s hover:shadow-custom-hover'
				>
					Join waitlist
				</motion.button>
			</header>
			<div className='mt-12 grid gap-y-14 relative'>
				<div className='grid gap-y-6 text-center'>
					<h1 className='text-2xl'>Revolutionise your</h1>
					<div className='bg-[#EFDC2E] w-fit mx-auto text-center py-2 px-6 text-5xl -rotate-[3deg] transition-all shadow-custom-s'>
						Social Selling
					</div>
					<p className={`${neueMachinaLight.className}`}>
						Improve sales by getting your product in the right conversations
					</p>
					<motion.button
						variants={{
							initial: { y: 0 },
							animate: { y: -12 },
						}}
						initial='initial'
						animate={controls}
						className=' bg-[#D96A47] mx-auto py-2 px-6 w-fit text-base text-white transition-shadow duration-150 shadow-custom-s hover:shadow-custom-hover'
					>
						Join waitlist
					</motion.button>
					<LightTone
						animate={controls}
						className={'absolute right-[15%] top-[3rem]'}
					/>
				</div>
				<div className='self-end relative'>
					<div className='relative flex justify-center'>
						<LeftSpring className={'absolute left-[10%] -bottom-[7px]'} />
						<Elipsis
							width={870}
							height={400}
							viewBox={'0 0 870 400'}
							cy={434.873}
							cx={434.873}
							r={433.677}
							transform={'rotate(-29.3225 434.873 434.873)'}
						/>
						<RightSpring className={'absolute right-[9%]'} />
					</div>
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10 '>
						<Elipsis
							width={591}
							height={294}
							viewBox={'0 0 591 294'}
							cy={295.62}
							cx={295.477}
							r={294.539}
							transform={'rotate(-52.6572 295.477 295.62)'}
						/>
						<SocialFacebook className={'absolute top-[40%] left-1'} />
						{/* <SocialTwitter className={'absolute top-0 '} /> */}
						<SocialInstagram className={'absolute top-[40%]  right-1'} />
					</div>
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20'>
						<Elipsis
							width={337}
							height={167}
							viewBox={'0 0 337 167'}
							cy={168.62}
							cx={168.476}
							r={167.136}
							transform={'rotate(-37.8891 168.476 168.62)'}
						/>
					</div>
					<ScreenCursor
						className={'absolute -bottom-2 left-1/2 -translate-x-1/2'}
					/>
				</div>
			</div>
		</main>
	)
}
