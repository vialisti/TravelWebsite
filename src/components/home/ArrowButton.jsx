import {LeftArrow, RightArrow} from '../../icon/Arrow';

export default function ArrowButton() {
	return (
		<div className='flex items-center gap-x-4'>
			<button className='border-2 border-[#ECEEF2] rounded-full p-2 text-small text-center hover:bg-[#2E8381] hover:text-white '>
				<LeftArrow />
			</button>
			<button className='border-2 border-[#ECEEF2] rounded-full p-2 text-small text-center hover:bg-[#2E8381] hover:text-white '>
				<RightArrow />
			</button>
		</div>
	);
}
