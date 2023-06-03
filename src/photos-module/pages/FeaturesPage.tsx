import { DetailSection, HeroPage, SectionBeta } from "../components/Features"
import { heroFeature } from "../data"
import { cubicBezier, motion } from "framer-motion"

const container = {
	hidden: {
		opacity: 0,
		x: 600
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
		x: -600,
		transition: {
			ease: "easeInOut",
			duration: 1
		}
	}
}
export const FeaturesPage = () => {

	return (
		<>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
			>
				<HeroPage heroData={heroFeature} />
				<DetailSection />
				<SectionBeta />
			</motion.div>
		</>
	)
}
