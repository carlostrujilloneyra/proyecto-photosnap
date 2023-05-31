import { Card } from "./components";
import { stories } from '../../../data/arrays-stories';

export const SectionCards = () => {

	const storiesHome = stories.slice(0, 4);

	return (
		<>
			<section className="section-cards container">
				{/* Arreglo de cards */}

				{
					storiesHome.map((storie) => {
						return <Card key={storie.name} storie = {storie}/>
					})
				}

			</section>
		</>
	)
}
