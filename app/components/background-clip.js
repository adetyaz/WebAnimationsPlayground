'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const BackgroundClip = () => {
	return (
		<div className='w-screen h-screen bg-green-200'>
			{/* <Image
				src={
					'https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
				width={500}
				height={500}
				className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
			/>
			<div class='absolute text-center flex flex-col justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-80'>
				<p
					style={{
						background: 'violet',
						fontSize: '6rem',
						// WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						color: 'transparent',
						textShadow: '0px 1px 0px rgba(0, 0, 0, 1)',

						MixBlendMode: 'multiply',
					}}
					// className='text-8xl text-white'
				>
					DUMB
				</p>
			</div> */}
			<div
				style={{
					position: 'relative',
					backgroundImage:
						'url("https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '100vh', // Full height of viewport
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 5 }}
					transition={{ duration: 5 }}
					style={{
						fontSize: '15vw', // Font size scales based on viewport width
						fontWeight: 'bold',
						color: 'transparent',
						backgroundImage:
							'url("https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Use the same background image as the container
						backgroundSize: 'cover', // Makes sure the image scales appropriately
						backgroundPosition: 'center',
						WebkitBackgroundClip: 'text', // Clipping the image to the text
						backgroundClip: 'text',
					}}
				>
					Your Text Here
				</motion.div>
			</div>
		</div>
	)
}
