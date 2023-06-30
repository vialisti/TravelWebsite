import HeroItems from './home/HeroItems';
import Button from './home/Button';
import ArrowButton from './home/ArrowButton';

import Card from './home/Card';

import HeroData from '../data/Hero';
import DestiData from '../data/Destination';

function Home() {
	console.log(DestiData);
	return (
		<div>
			{/* Hero */}
			<div className='container'>
				<div className='bg-hero-pattern bg-cover bg-center h-auto rounded-3xl'>
					<div className='flex items-center px-20 py-40 gap-5'>
						<div className='w-1/2'>
							<div className='mb-5'>
								<p className='inline px-5 text-sm font-medium text-white py-2 bg-white/20  rounded-full text-center border-white border-2'>
									Discover the World&apos;s Wonders with Akana
								</p>
							</div>
							<h1 className='text-white font-semibold text-5xl capitalize mb-5 leading-[65px]'>Your Gateway to Extraordinary Travel Experiences</h1>
							<Button
								text='Booking Now'
								path={'/'}
							/>
						</div>
						<div className='w-1/2 space-y-10 flex flex-col'>
							<HeroItems
								icon={HeroData[0].icon}
								align='self-center'
								text={HeroData[0].text}
							/>
							<HeroItems
								icon={HeroData[1].icon}
								align='self-start'
								text={HeroData[1].text}
							/>
							<HeroItems
								icon={HeroData[2].icon}
								align='self-end'
								text={HeroData[2].text}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Travel Accomodation */}
			<div className='container my-36 px-16'>
				<div className='flex justify-between py-6 mb-2'>
					<h2 className='text-primary text-4xl font-semibold w-[500px] capitalize leading-[3rem]'>Travel accommodation recommendations for you</h2>
					<ArrowButton />
				</div>
				<div className='flex justify-between'>
					{DestiData.map((item, index) => (
						<Card
							key={index}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
							person={item.person}
							location={item.location}
						/>
					))}
				</div>
			</div>

			{/* Why you need to choose us? */}
			<div className='relative container my-36 bg-primary w-full h-[730px]'>
				<div className='absolute -bottom-64 -left-32 w-[589px] h-[589px] bg-gradient-to-tr from-white/40 to-white/5 rounded-full blur-xl' />
			</div>
		</div>
	);
}

export default Home;
