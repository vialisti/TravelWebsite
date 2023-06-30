/* eslint-disable react/prop-types */
import { NumericFormat } from 'react-number-format';

import { Star, People, Location } from '../../icon/CardIcons.jsx';

function Card({ image, title, rating, location, person, price }) {
	return (
		<div className='w-[419px] h-auto space-y-4'>
			<img
				src={image}
				alt=''
				className='object-cover bg-center h-56 w-full rounded-3xl shadow-[0px 2.1286637783050537px 14.52500057220459px 0px rgba(0, 0, 0, 0.05), 0px 17px 116px 0px rgba(0, 0, 0, 0.09);]'
			/>
			<h2 className='leading-7 text-primary font-medium text-lg w-[90%]'>{title}</h2>
			<div className='flex items-center justify-between text-small text-lg capitalize'>
				<div className='flex items-center gap-x-2'>
					<Star />
					<p className='text-sm'>{rating} Rating</p>
				</div>
				<hr className='rotate-90 border border-[#ECEFF1] w-4' />
				<div className='flex items-center gap-x-2'>
					<Location />
					<p className='text-sm'>{location}</p>
				</div>
				<hr className='rotate-90 border border-[#ECEFF1] w-4' />
				<div className='flex items-center gap-x-2'>
					<People />
					<p className='text-sm'>{person} Person</p>
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<div className='space-y-1'>
					<p className='text-primary text-lg flex'>
						<NumericFormat
							value={price}
							thousandSeparator={true}
							prefix='Rp. '
							suffix='/'
							displayType="text"
							isAllowed={true}
							className='font-medium'
						/>
						person
					</p>
					<p className='text-small text-sm'>Including tax and fee</p>
				</div>
				<button className='px-8 py-3 text-primary rounded-full text-sm font-medium border border-primary hover:bg-primary hover:text-white'>Contact Us</button>
			</div>
		</div>
	);
}

export default Card;
