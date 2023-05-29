import { Article } from "./components"
import { articlesArray } from '../../../data';

export const Main = () => {
	return (
		<>
			<main className="container">
				<section>

					{/* Aquí irán tres articles */}
					{
						articlesArray.map((article) => {
							return <Article article={article} key={article.subtitle} />
						})
					}

				</section>
			</main>
		</>
	)
}
