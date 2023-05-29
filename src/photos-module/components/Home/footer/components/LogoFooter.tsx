import { useNavigate } from 'react-router-dom';
import footerLogo from '../../../../../assets/logos/footer-icon.png';

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
						src={footerLogo}
						alt="footer-logo" />
        </picture>
      </div>
    </>
  );
};
