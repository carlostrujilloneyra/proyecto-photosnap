import { Footer } from "../components/footer/Footer"
import { Main } from "../components/main/Main"
import { SectionCards } from "../components/section-cards/SectionCards"
import { SectionDetails } from "../components/section-details/SectionDetails"

export const HomePage = () => {
	return (
		<>
			<Main />
			<SectionCards />
			<SectionDetails />
			<Footer />
		</>
	)
}
