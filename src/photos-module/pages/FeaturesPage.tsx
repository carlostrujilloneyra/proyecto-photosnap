import { DetailSection, HeroPage, SectionBeta } from "../components/Features"
import { heroFeature } from "../data"

export const FeaturesPage = () => {
	return (
		<>
			<HeroPage heroData={heroFeature} />
			<DetailSection />
			<SectionBeta />
		</>
	)
}
