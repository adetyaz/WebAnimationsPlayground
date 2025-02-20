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
	MagnetWrapper,
} from '../components'

export default function SocialSelling() {
	return (
		<main
			className={`${neueMachina.className} bg-[#FFFFF3] scroll-smooth text-black min-h-dvh pt-8 px-14 
      overflow-hidden
      `}
		>
			<header className='flex items-center justify-between'>
				<Image src={'/images/e-logo.png'} height={20} width={30} alt='logo' />
				<button className='relative py-2 px-6 w-40 h-10 text-base text-white'>
					<span className='absolute left-0 top-0 w-full h-full bg-black'></span>
					<span className='absolute flex justify-center items-center left-0 top-0 bg-[#D96A47] w-full h-full translate-x-1 -translate-y-1 transition-all duration-300 hover:translate-x-0 hover:translate-y-0'>
						<p>Join waitlist</p>
					</span>
				</button>
			</header>
			<div className='mt-12 grid gap-y-24 relative'>
				<div className='grid gap-y-6 text-center'>
					<h1 className='text-2xl'>Revolutionise your</h1>
					<div className='bg-[#EFDC2E] w-fit mx-auto text-center py-2 px-6 text-5xl -rotate-[3deg] transition-all shadow-custom-s'>
						Social Selling
					</div>
					<p className={`${neueMachinaLight.className}`}>
						Improve sales by getting your product in the right conversations
					</p>
					<button className='relative mx-auto py-2 px-6 w-48 h-12 text-base text-white'>
						<span className='absolute left-0 top-0 w-full h-full bg-black'></span>
						<span className='absolute flex justify-center items-center left-0 top-0 bg-[#D96A47] w-full h-full translate-x-[.35rem] -translate-y-[.35rem] transition-all duration-300 hover:translate-x-0 hover:translate-y-0'>
							<p>Join waitlist</p>
						</span>
					</button>
					<LightTone className={'absolute right-[15%] top-[3rem]'} />
				</div>
				<div className='self-end relative'>
					<div className='relative flex justify-center'>
						<LeftSpring className={'absolute left-[10%] bottom-0'} />
						<Elipsis
							width={870}
							height={350}
							viewBox={'0 0 870 350'}
							cy={434.873}
							cx={434.873}
							r={433.677}
							transform={'rotate(-29.3225 434.873 434.873)'}
						/>
						<RightSpring className={'absolute right-[9%] bottom-0'} />
					</div>
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10 '>
						<Elipsis
							width={591}
							height={244}
							viewBox={'0 0 591 244'}
							cy={295.62}
							cx={295.477}
							r={294.539}
							transform={'rotate(-52.6572 295.477 295.62)'}
						/>

						<div className='absolute top-[40%] left-4'>
							<MagnetWrapper>
								<div className='size-16 flex items-center justify-center'>
									<SocialFacebook />
								</div>
							</MagnetWrapper>
						</div>

						<div className='absolute -top-5 left-1/2 -translate-x-1/2 '>
							<MagnetWrapper>
								<div className='flex items-center justify-center size-12 rounded-full border border-[#D96A47] bg-white'>
									<Image
										src={'/images/x.png'}
										height={25}
										width={25}
										alt='x icon'
									/>
								</div>
							</MagnetWrapper>
						</div>

						<div className='absolute top-[40%] right-4'>
							<MagnetWrapper>
								<div className='size-16 flex items-center justify-center'>
									<SocialInstagram />
								</div>
							</MagnetWrapper>
						</div>
					</div>
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20'>
						<Elipsis
							width={337}
							height={117}
							viewBox={'0 0 337 117'}
							cy={168.62}
							cx={168.476}
							r={167.136}
							transform={'rotate(-37.8891 168.476 168.62)'}
						/>
					</div>
					<ScreenCursor
						className={'absolute bottom-0 left-1/2 -translate-x-1/2'}
					/>
				</div>
			</div>
		</main>
	)
}
