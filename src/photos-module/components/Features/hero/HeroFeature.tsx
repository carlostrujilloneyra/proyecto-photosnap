import { HeroFeature } from '../../../interfaces/features/feature.interface';
interface Props{
	heroData: HeroFeature;
}

export const HeroPage = ({heroData}: Props) => {

	const {title, description, image: {bg_mobile, bg_tablet, bg_desktop}} = heroData;

	return (
		<>
			<div className="container-hero-page container">

				<div className="container-hero-info">
					<h2>{title}</h2>
					<p>{description}</p>
				</div>

				<div className="container-feature-image">
					<picture>
						<source media="(min-width: 1024px)" srcSet={bg_desktop} />
						<source media="(min-width: 600px)" srcSet={bg_tablet} />
						<img src={bg_mobile} alt="feature-hero-image" />
					</picture>
				</div>

			</div>
		</>
	)
}
