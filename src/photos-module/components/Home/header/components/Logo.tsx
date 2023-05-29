import { useNavigate } from 'react-router-dom';
import logoHeader from '../../../../../assets/logos/header-icon.png';

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
					src={logoHeader}
					alt="logo-header"
				/>
			</figure>
		</>
	)
}
