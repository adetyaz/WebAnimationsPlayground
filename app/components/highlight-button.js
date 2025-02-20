import { motion } from 'framer-motion'

export const HighlightButton = () => {
	return (
		<main class='h-screen w-screen flex flex-col items-center justify-center bg-black'>
			<motion.button
				initial={{ '--x': '100%' }}
				animate={{ '--x': '-100%' }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
				}}
				className='relative px-6 py-2 rounded-md radial-gradient'
			>
				<span className='tracking-wide font-light text-neutral-100 relative block w-full h-full linear-mask'>
					Start now
				</span>
			</motion.button>
		</main>
	)
}
