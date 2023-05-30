import { useNavigate } from 'react-router-dom';

export const Logo = () => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/');
	}

	return (
		<>
			<figure>
				<img
					className='logo-header'
					onClick={handleNavigate}
					src='/assets/logos/header-icon.png'
					alt="logo-header"
				/>
			</figure>
		</>
	)
}
