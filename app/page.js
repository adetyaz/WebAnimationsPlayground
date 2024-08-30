import Image from 'next/image'
import Pexels from '../public/pexels-photo.jpeg'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Image
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
			/>
		</main>
	)
}
