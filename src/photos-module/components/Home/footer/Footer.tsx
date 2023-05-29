import { Button, LogoFooter, NavFooter, SocialNetworks } from './components';

export const Footer = () => {
	return (
		<>
			<footer className="main-footer container">

				<div className='main-footer__flex'>

					<div className="container-footer__first-part">

						<div className='container-logo-socials'>
							<LogoFooter />
							<SocialNetworks />
						</div>

						<div>
							<NavFooter />
						</div>

					</div>
					
					<Button />
	
				</div>

			</footer>
		</>
	)
}
