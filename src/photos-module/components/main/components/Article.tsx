import { articleInterface } from '../../../interfaces/home/home-page.interface';
import { Button } from './Button';

interface Props{
	article: articleInterface
}

export const Article = ({ article:
	{ subtitle,
		description,
		image: { bg_mobile, bg_tablet, bg_desktop },
		buttonText,
		arrowButton,
		arrowButtonWhite,
		changePosition,
		whiteColor } }: Props) => {
	
	const propsButton = {
		buttonText,
		whiteColor,
		arrowButton,
		arrowButtonWhite
	}

	console.log(changePosition)
	
	return (
		<>
			<div className={`main-article ${whiteColor || changePosition ? 'white' : ''}`}>

				<div className='container-image'>
					<picture>
						
						<source media="(min-width:1024px)" srcSet={bg_desktop} />
						
						<source media='(min-width:600px)' srcSet={bg_tablet} />

						<img src={bg_mobile} alt={subtitle} />
						
					</picture>
				</div>

				<div className= {`main-article__info ${whiteColor ? 'white' : ''}`}>
					<h2>{subtitle}</h2>
					<p>{description}</p>
					<div className="container-button">
						<Button
							button={propsButton}
						/>
					</div>
				</div>

			</div>
		</>
	)
}
