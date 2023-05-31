import { useEffect, useState } from 'react';
import { hero } from '../../../data/hero-info';
import { Button } from './Button';

export const Hero = () => {

	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	
	const { image, subtitle, title, author, description } = hero;
	
	const { bg_mobile, bg_tablet, bg_desktop } = image;
	
	const imageUrl = windowWidth >= 1024 ? bg_desktop : windowWidth >= 600 ? bg_tablet : bg_mobile;
		
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}
		
		window.addEventListener('resize', handleWindowResize);
		
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}

	}, [])

	return (
		<>
			<div
				className='container-hero container'
				style={{ backgroundImage: `url(${imageUrl})` }}
			>

				<div className='container-hero__info'>
					<h3>{subtitle}</h3>
					<h2>{title}</h2>
					<p>by {author}</p>
					<p>{description}</p>
					<Button />
				</div>

			</div>
		</>
	)
}
