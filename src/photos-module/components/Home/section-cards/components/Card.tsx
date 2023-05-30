import { useEffect, useState } from 'react';
import { Storie } from '../../../../interfaces/stories/stories.interface';
import { ButtonCard } from './ButtonCard';

interface Props{
	storie: Storie;
}

export const Card = (
	{ storie:
		{ image: { bg_mobile, bg_desktop },
			name,
			author }
	}: Props) => {
	
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	
	const imageUrl = windowWidth >= 600 ? bg_desktop : bg_mobile;

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
			<div className='container-card' style={{ backgroundImage: `url(${imageUrl})` }}>
				<div className='container-card__info'>
					<h3>{name}</h3>
					<p>by {author}</p>
					<hr />

					{/* Botón */}
					<ButtonCard />
				</div>
			</div>
		</>
	)
}
