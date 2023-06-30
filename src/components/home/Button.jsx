import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';

function Button({ text, path }) {
	const navigate = useNavigate();
	return (
		<button
			className='px-14 py-4 text-center bg-white rounded-full leading-6 text-primary font-medium'
			onClick={() => navigate({ path })}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: string,
	path: string,
};

export default Button;
