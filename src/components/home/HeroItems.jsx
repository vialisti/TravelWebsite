import { string } from 'prop-types';

function HeroItems({ icon, text, align }) {
	return (
		<div className={'w-[65%] px-5 py-4 bg-white/30 backdrop-blur-[2px] rounded-2xl flex items-center gap-x-4 ' + align}>
			<div className='p-2 rounded-full bg-white'>
				<img
					src={icon}
					alt=''
					width={50}
				/>
			</div>
			<p className='text-white text-sm'>{text}</p>
		</div>
	);
}
HeroItems.propTypes = {
	icon: string,
	text: string,
	align: string,
};
export default HeroItems;
