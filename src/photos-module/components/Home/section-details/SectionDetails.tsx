import { details } from "../../../data"
import { DetailElement } from "./components/Detail"
import { Detail } from '../../../interfaces/details/details.interface';

export const SectionDetails = () => {

	const homeDetails: Detail[] = details.slice(0, 3);

	return (
		<>
			<section className="section-details container">
				{
					homeDetails.map((detail) => {
						return <DetailElement key={detail.title} detail={detail} />
					})
				}
			</section>
		</>
	)
}
