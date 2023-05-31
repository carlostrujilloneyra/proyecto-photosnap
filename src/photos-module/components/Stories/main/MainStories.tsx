import { stories } from "../../../data"
import { Card } from "../../Home/section-cards/components"


export const MainStories = () => {
	return (
		<>
			<main>
				<section className="section-cards-stories container">
					{
						stories.map((storie) => {
							return <Card key={storie.name} storie={storie} />
						})
					}
				</section>
			</main>
		</>
	)
}
