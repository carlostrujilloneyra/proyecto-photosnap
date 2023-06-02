import { HeroPage, SectionBeta } from "../components/Features"
import { PlanPricing } from "../components/Pricing"
import { heroPricing } from "../data"

export const PricingPage = () => {
	return (
		<>
			<HeroPage heroData={heroPricing} />
			<PlanPricing />
			<SectionBeta />
		</>
	)
}
