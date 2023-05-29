import { Footer } from "../components/Home/footer/Footer"
import { Main } from "../components/Home/main/Main"
import { SectionCards } from "../components/Home/section-cards/SectionCards"
import { SectionDetails } from "../components/Home/section-details/SectionDetails"

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
