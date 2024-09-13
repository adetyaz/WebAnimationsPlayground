import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { mantrope } from '../fonts'
import {
	Toggle,
	DoubleCircle,
	LineTwo,
	LineOne,
	WandStar,
	Vector,
	PcSpeaker,
	ArrowRight,
} from '../components'

export default function GrowBusiness() {
	return (
		<main
			className={`${mantrope.className} bg-white px-16 pt-4 pb-12 min-h-dvh`}
		>
			<header className='flex items-center justify-between pb-4 border-b border-[#D4D3D8] text-[#101928] text-sm'>
				<Image
					src='/images/empty-logo.png'
					alt='logo'
					height={44}
					width={185}
				/>
				<ul className='flex gap-4 capitalize'>
					<li>
						<Link className='flex gap-1 items-center' href='/'>
							<span>products</span>
							<ChevronDown />
						</Link>
					</li>
					<li>
						<Link href='/'>pricing</Link>
					</li>
					<li>
						<Link href='/' style={{ textTransform: 'none' }}>
							FAQs
						</Link>
					</li>
					<li>
						<Link className='flex gap-1 items-center' href='/'>
							<span>Resources</span>
							<ChevronDown />
						</Link>
					</li>
				</ul>
			</header>
			<section
				className='grid gap-8 mt-4'
				style={{ gridTemplateColumns: '2fr 3fr' }}
			>
				<div>
					<div className='bg-[#F6F6F6] mb-4 p-8 flex justify-between rounded-3xl'>
						<div>
							<h2 className='text-[#27272A] font-bold text-xl'>
								Join waitlist
							</h2>
							<p className='text-[#71717A]'>Become a mixer today</p>
						</div>
						<ArrowRight />
					</div>
					<div className='bg-[#F6F6F6] py-8 px-9 rounded-3xl'>
						<div>
							<h2 className='text-[#27272A] font-bold text-xl mb-4'>
								Social selling redefined
							</h2>
							<p className='text-[#71717A]'>
								Boost sales by keeping your business alive on social media.
								Create keyword projects and generate auto responses
							</p>
						</div>
						<div className='bg-white mt-12 mb-16 shadow-xl p-12 rounded-3xl text-sm rotate-6'>
							<div className='bg-[#ECFDF3] p-4 rounded-2xl text-[#039855] flex gap-4'>
								<PcSpeaker />
								<p>Tell us about your business/website</p>
							</div>
							<LineOne className={'-rotate-[4deg] relative left-8'} />
							<div className='bg-[#E3EFFC] p-4 rounded-2xl text-[#1671D9] flex gap-4'>
								<Vector />
								<p>We tell you what keywords to track</p>
							</div>
							<LineTwo className={'-rotate-[4deg] relative left-8'} />
							<div className='bg-[#FFECE5] p-4 rounded-2xl text-[#DD900D] flex gap-4'>
								<WandStar />
								<p>
									Generate replies and leads when the keywords are mentioned
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='grid gap-y-4'>
					<div className='text-[#1D77E1] text-7xl font-semibold'>
						<h1>Grow your business </h1>
						<div className='flex justify-between items-center'>
							<h1>
								with <span className='text-[#100407]'>keyword</span>
							</h1>

							<Image
								src='/images/chat-box.png'
								alt='chatbox image'
								width={75}
								height={55}
								className='w-[80px] h-[60px] mr-4'
							/>
						</div>
						<div className='flex justify-between'>
							<h1 className='text-[#100407]'>mentioning</h1>
							<div className='flex justify-between'>
								<Toggle />
								<p className='text-[#626262] text-sm'>
									Join 20,000+ people exploring the most exciting social selling
									software
								</p>
							</div>
						</div>
					</div>
					<div
						className='grid gap-x-8 text-[#71717A]'
						style={{ gridTemplateColumns: '2fr 1.5fr' }}
					>
						<div className='bg-[#F6F6F6] p-8 rounded-3xl'>
							<h2 className='text-[#27272A] font-bold text-xl'>
								Have questions??
							</h2>
							<p>We have you covered</p>
							<div className='w-full mt-4 grid gap-y-4'>
								<div className='bg-white flex justify-between items-center p-4 rounded-full'>
									<p>What is engagemix?</p>
									<ChevronDown />
								</div>
								<div className='bg-white flex justify-between items-center p-4 rounded-full'>
									<p>What is engagemix?</p>
									<ChevronDown />
								</div>
								<div className='bg-white flex justify-between items-center p-4 rounded-full'>
									<p>What is engagemix?</p>
									<ChevronDown />
								</div>
								<div className='bg-white flex justify-between items-center p-4 rounded-full'>
									<p>What is engagemix?</p>
									<ChevronDown />
								</div>
								<div className='bg-white flex justify-between items-center p-4 rounded-full'>
									<p>What is engagemix?</p>
									<ChevronDown />
								</div>
							</div>
						</div>
						<div className='grid'>
							<div className='bg-[#F6F6F6] px-8 py-8 pb-12 rounded-t-3xl grid gap-y-4 text-center'>
								<div className='bg-white rounded-full p-4'>Customisation</div>
								<div className='bg-white rounded-full p-4'>
									Keyword mentions
								</div>
								<div className='bg-white rounded-full p-4'>
									Sentiment ananlysis
								</div>
								<div className='bg-white rounded-full p-4'>
									Competitor mentions
								</div>
								<div className='bg-white rounded-full p-4'>
									Response generation
								</div>
							</div>
							<div className='flex items-start justify-center gap-4 p-8 text-white rounded-b-3xl text-sm bg-[#1D77E1]'>
								<DoubleCircle />
								<p> 20,000+ businesses use engagemix</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
