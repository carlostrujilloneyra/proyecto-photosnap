import { details } from "../../../data"
import { DetailElement } from "../../Home/section-details/components/Detail"


export const DetailSection = () => {
	return (
		<>
			<section className="feature-section container">
				<div className="container-feature-details">
					{
						details.map((detail) => {
							return <DetailElement key={detail.title} detail={detail}/>
						})
					}
				</div>
			</section>
		</>
	)
}
