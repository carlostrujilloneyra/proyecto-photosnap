import { useNavigate } from 'react-router-dom';
import arrowWhite from '../../../../../assets/shared/desktop/arrow-white.svg';

export const Button = () => {

	const navigate = useNavigate();

	const handleNavigatePricingPage = () => {
		navigate('/pricing');
	}
	
	return (
		<>
			<div className="container-button-footer">
				<button
					onClick={handleNavigatePricingPage}
					className="button-footer"
				>
					Get an invite
					<img src={arrowWhite} alt="arrow-white" />
				</button>
			</div>
		</>
	)
}
