'use client'
import {
	AdjustmentsHorizontalIcon,
	ArrowTrendingUpIcon,
	BoltIcon,
	CursorArrowRaysIcon,
	PencilIcon,
	UserGroupIcon,
	UserIcon,
	XMarkIcon,
	ChartBarIcon,
	ChartPieIcon,
	DocumentCheckIcon,
	Square2StackIcon,
	UsersIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export const NavMenu = () => {
	return (
		<main className='w-screen h-screen flex flex-row relative'>
			<Navigation />
			<section className='flex flex-col p-10 ml-20 w-full gap-5'>
				<h1 className='text-4xl text-neutral-200'>Dashboard</h1>
				<div className='w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded' />
				<div className='flex flex-row gap-5 w-full'>
					<div className='border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border' />
					<div className='border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded border' />
				</div>
			</section>
		</main>
	)
}

const NavigationLink = ({ children, name }) => {
	return (
		<a
			href='#'
			className='flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100'
		>
			{children}
			<p className='text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide'>
				{name}
			</p>
		</a>
	)
}

const ProjectLink = ({ children, name, setSelectedProject }) => {
	return (
		<a
			href='#'
			// onClick={handleClick}
			className='flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100'
		>
			{children}
			<div className='flex overflow-clip place-items-center justify-between w-full'>
				<p className='text-inherit truncate whitespace-nowrap tracking-wide'>
					{name}
				</p>
				<ChevronRightIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
			</div>
		</a>
	)
}

const ProjectNavigation = ({ selectedProject, isOpen, setSelectedProject }) => {
	return (
		<motion.nav
			// variants={variants}
			initial='close'
			animate='open'
			exit='close'
			transition={{
				duration: 0.25,
				ease: 'easeInOut',
			}}
			className={`h-full flex flex-col gap-8 w-64 absolute bg-neutral-900 ml-0 ${
				isOpen ? 'left-64' : 'left-20'
			} border-r border-neutral-800 p-5`}
		>
			<div className='flex flex-row w-full justify-between place-items-center'>
				<h1 className='tracking-wide text-neutral-100 text-lg'>
					{selectedProject}
				</h1>
				<button onClick={() => setSelectedProject(null)}>
					<XMarkIcon className='w-8 stroke-neutral-400' />
				</button>
			</div>
			<input
				placeholder='Search'
				type='text'
				className='px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100'
			/>
			<div className='flex flex-col gap-3'>
				<NavigationLink name='Progress'>
					<ArrowTrendingUpIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
				<NavigationLink name='Team Members'>
					<UserGroupIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
				<NavigationLink name='In Review'>
					<PencilIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
				<NavigationLink name='In Progress'>
					<BoltIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
				<NavigationLink name='Up Next'>
					<CursorArrowRaysIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
				<NavigationLink name='Project Settings'>
					<AdjustmentsHorizontalIcon className='stroke-[0.75] stroke-inherit min-w-8 w-8' />
				</NavigationLink>
			</div>
			<div className='flex flex-col gap-5'>
				<h1 className='tracking-wide text-neutral-300'>Team Members</h1>
				<a href='#' className='flex flex-row gap-3 place-items-center'>
					<UserIcon className='w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70' />
					<p className='tracking-wide text-neutral-400'>Steve Jobs</p>
				</a>
				<a href='#' className='flex flex-row gap-3 place-items-center'>
					<UserIcon className='w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70' />
					<p className='tracking-wide text-neutral-400'>Bill Gates</p>
				</a>
				<a href='#' className='flex flex-row gap-3 place-items-center'>
					<UserIcon className='w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70' />
					<p className='tracking-wide text-neutral-400'>Jeff Bezos</p>
				</a>
			</div>
		</motion.nav>
	)
}

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedProject, setSelectedProject] = useState(null)

	const containerControls = useAnimationControls()
	const svgControls = useAnimationControls()

	useEffect(() => {
		if (isOpen) {
			containerControls.start('open')
			svgControls.start('open')
		} else {
			containerControls.start('close')
			svgControls.start('close')
		}
	}, [isOpen])

	const handleOpenClose = () => {
		setIsOpen(!isOpen)
		setSelectedProject(null)
	}

	return (
		<>
			<motion.nav
				// variants={containerVariants}
				animate={containerControls}
				initial='close'
				className='bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600'
			>
				<div className='flex flex-row w-full justify-between place-items-center'>
					<div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full' />
					<button
						className='p-1 rounded-full flex'
						onClick={() => handleOpenClose()}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1}
							stroke='currentColor'
							className='w-8 h-8 stroke-neutral-200'
						>
							<motion.path
								strokeLinecap='round'
								strokeLinejoin='round'
								// variants={svgVariants}
								animate={svgControls}
								d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
								transition={{
									duration: 0.5,
									ease: 'easeInOut',
								}}
							/>
						</svg>
					</button>
				</div>
				<div className='flex flex-col gap-3'>
					<NavigationLink name='Dashboard'>
						<ChartBarIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
					</NavigationLink>
					<NavigationLink name='Projects'>
						<Square2StackIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
					</NavigationLink>
					<NavigationLink name='Tasks'>
						<DocumentCheckIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
					</NavigationLink>
					<NavigationLink name='Reporting'>
						<ChartPieIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
					</NavigationLink>
					<NavigationLink name='Users'>
						<UsersIcon className='stroke-inherit stroke-[0.75] min-w-8 w-8' />
					</NavigationLink>
				</div>
				<div className='flex flex-col gap-3'>
					<ProjectLink
						name='Virtual Reality'
						setSelectedProject={setSelectedProject}
					>
						<div className='min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700' />
					</ProjectLink>
					<ProjectLink
						name='Apple Vision Pro'
						setSelectedProject={setSelectedProject}
					>
						<div className='min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700' />
					</ProjectLink>
					<ProjectLink name='Porsche' setSelectedProject={setSelectedProject}>
						<div className='min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700' />
					</ProjectLink>
					<ProjectLink
						name='Secret Project'
						setSelectedProject={setSelectedProject}
					>
						<div className='min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700' />
					</ProjectLink>
				</div>
			</motion.nav>
			<AnimatePresence>
				{selectedProject && (
					<ProjectNavigation
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
						isOpen={isOpen}
					/>
				)}
			</AnimatePresence>
		</>
	)
}
