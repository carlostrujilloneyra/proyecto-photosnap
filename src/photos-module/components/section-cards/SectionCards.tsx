import { Card } from "./components";
import { storiesHome } from '../../data/arrays-stories';

export const SectionCards = () => {

	const stories = storiesHome.slice(0, 4);

	return (
		<>
			<section className="section-cards container">
				{/* Arreglo de cards */}

				{
					stories.map((storie) => {
						return <Card key={storie.name} storie = {storie}/>
					})
				}

			</section>
		</>
	)
}
