import { heroFeature } from "../../../data"


export const HeroFeature = () => {

	const {title, description, image: {bg_mobile, bg_tablet, bg_desktop}} = heroFeature;

	return (
		<>
			<div className="container-hero-feature container">

				<div className="container-feature-info">
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
