import { useNavigate } from 'react-router-dom';

export const LogoFooter = () => {

	const navigate = useNavigate();

	const handleNavigateHome = () => {
		navigate('/');
	}
 
  return (
    <>
      <div className="container-logo">
        <picture>
					<img
						onClick={handleNavigateHome}
						src='/assets/logos/footer-icon.png'
						alt="footer-logo" />
        </picture>
      </div>
    </>
  );
};
