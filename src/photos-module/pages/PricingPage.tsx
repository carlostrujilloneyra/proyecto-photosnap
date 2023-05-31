import { HeroPage, SectionBeta } from "../components/Features"
import { heroPricing } from "../data"

export const PricingPage = () => {
	return (
		<>
			<HeroPage heroData={heroPricing} />
			<SectionBeta />
		</>
	)
}
