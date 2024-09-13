import { Inter, Manrope } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })

export const mantrope = Manrope({ subsets: ['latin'] })

export const neueMachina = localFont({
	src: '../public/fonts/NeueMachina-Ultrabold.otf',
	display: 'swap',
	weight: '400',
})

export const neueMachinaLight = localFont({
	src: '../public/fonts/NeueMachina-Light.otf',
	display: 'swap',
	weight: '400',
})
