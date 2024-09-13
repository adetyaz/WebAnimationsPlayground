import './globals.css'
import { inter } from './fonts'

export const metadata = {
	title: "Adetayo's Learning Playground",
	description:
		'Playground for learning and practicng microinteraction, transition, animations with various libraries',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} overflow-x-hidden`}>{children}</body>
		</html>
	)
}
