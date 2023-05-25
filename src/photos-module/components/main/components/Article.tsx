import { articleInterface } from '../../../interfaces/home/home-page.interface';
import { Button } from './Button';

interface Props{
	article: articleInterface
}

export const Article = ({ article:
	{ subtitle,
		description,
		image: { bg_mobile, bg_desktop },
		buttonText,
		arrowButton,
		arrowButtonWhite,
		whiteColor } }: Props) => {
	
	const propsButton = {
		buttonText,
		whiteColor,
		arrowButton,
		arrowButtonWhite
	}
	
	return (
		<>
			<div className={`main-article ${whiteColor ? 'white' : ''}`}>

				<div className='container-image'>
					<p>Soy una imagen</p>
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
