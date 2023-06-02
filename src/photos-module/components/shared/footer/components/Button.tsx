import { useNavigate } from 'react-router-dom';

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
					<img src='/assets/shared/desktop/arrow-white.svg' alt="arrow-white" />
				</button>
			</div>
		</>
	)
}
