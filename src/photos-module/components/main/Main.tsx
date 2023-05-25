import { articlesArray } from "../../data/home/arrays-info"
import { Article } from "./components"

export const Main = () => {
	return (
		<>
			<main className="container">
				<section className="main-section">

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
