import { articleInterface } from '../../../interfaces/home/home-page.interface';

interface Props{
	article: articleInterface
}

// interface Article{
// 	subtitle: string
// }

export const Article = ({ article:
	{ subtitle,
		description,
		image: { bg_mobile, bg_desktop },
		buttonText,
		arrowButton,
		arrowButtonWhite,
		whiteColor } }: Props) => {
	return (
		<>
			<div className='main-article'>

				<div>
					<p>Soy una imagen</p>
				</div>

				<div className= {`main-article__info ${whiteColor ? 'white' : ''}`}>
					<h2>{subtitle}</h2>
					<p>{description}</p>
					<div className="container-button">
						<button
							className={`button-article ${whiteColor ? 'white' : ''}`}
						>
							{buttonText}
							<img src={whiteColor ? arrowButtonWhite : arrowButton}
								alt="arrow-button"
								color='white'
							/>
						</button>
					</div>
				</div>

			</div>
		</>
	)
}
