import { HeroPage, SectionBeta } from "../components/Features"
import { PlanPricing } from "../components/Pricing"
import { heroPricing } from "../data"
import { cubicBezier, motion } from "framer-motion"

const container = {
	hidden: {
		opacity: 0,
		x: -800
	},
	show: {
		opacity: 4,
		x:0,
		transition: {
			ease: cubicBezier(0.6, 0.01, -0.05, 0.75),
			duration: 1.5,
		}
	},
	exit: {
		opacity: 0,
		x: 800,
		transition: {
			ease: "easeInOut",
			duration: 1
		}
	}
}

export const PricingPage = () => {

	return (
		<>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
			>
				<HeroPage heroData={heroPricing} />
				<PlanPricing />
				<SectionBeta />
			</motion.div>
		</>
	)
}
