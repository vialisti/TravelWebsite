import { NavLink, Link } from 'react-router-dom';
function Header() {
	return (
		<div className='container'>
			<ul className='flex justify-center items-center gap-x-20 py-6 text-small leading-snug font-medium text-sm'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/our-service'
						className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
					>
						Our Service
					</NavLink>
				</li>
				<li>
					<Link to='/'>
						<img src="../assets/logo.svg" alt="" />
					</Link>
				</li>
				<li>
					<NavLink
						to='/package'
						className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
					>
						Package
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about-us'
						className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
					>
						About Us
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Header;
