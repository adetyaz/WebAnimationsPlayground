import Image from 'next/image'
import Pexels from '../public/pexels-photo.jpeg'
import { Basics } from './components/basics'
import { Gestures } from './components/gestures'
import { AnimationControl } from './components/animation-control'
import { ViewBasedAnimations } from './components/view-based-animations'
import { ScrollBased } from './components/scroll-based'
import { StaggeredText } from './components/staggered-text'
import { DeleteTask } from './components/delete-task'
import { TextInput } from './components/text-input'
import { BackgroundClip } from './components/background-clip'
import { FancyBacklitHover } from './components/fancy-backlit-hover'
import { ComplexButton } from './components/complex-button'
import { PixelatedHero } from './components/pixelated-hero'
import { NavMenu } from './components/nav-menu'
import { TodosAnimate } from './components/todos-animate'
import { SizesandText } from './components/sizes-and-text'

export default function Home() {
	return (
		<main className='flex min-h-screen bg-orange-300 flex-col items-center justify-center '>
			{/* <Image
				src='https://images.pexels.com/photos/9792173/pexels-photo-9792173.jpeg'
				// src={Pexels}
				alt='random'
				fill
				// height={331.25}
				// width={800}
				className='w-[800px] h-auto object-cover object-left-bottom'
				// placeholder='blur'
				// blurDataURL={'/pexels-photo.jpeg'}
				priority
				// srcSet='https://images.pexels.com/photos/27999305/pexels-photo-27999305/free-photo-of-a-woman-is-jumping-in-the-air-in-front-of-a-fountain.jpeg 600w, https://images.pexels.com/photos/28038364/pexels-photo-28038364/free-photo-of-a-white-car-parked-on-the-side-of-the-road.jpeg 500w'
				sizes='(max-width: 500px) 300px'
			/> */}
			<div>
				<ComplexButton />
			</div>
		</main>
	)
}
