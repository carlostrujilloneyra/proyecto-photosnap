import { useEffect, useState } from "react"
import { Button } from "../../Stories"
import { imageFeature } from "../../../data";


export const SectionFeature = () => {

	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	
	const { image:{bg_mobile, bg_tablet, bg_desktop} } = imageFeature;
	
	const imageUrl = windowWidth >= 1024 ? bg_desktop : windowWidth >= 600 ? bg_tablet : bg_mobile;
		
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}
		
		window.addEventListener('resize', handleWindowResize);
		
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}

	}, [])

	return (
		<>
			<section
				className="main-section-feature container"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>

				<div className="feature-container-info">
					<h2>We´re in beta.<br/>Get your invite <br/>Today!</h2>
				</div>

				<Button />

			</section>
		</>
	)
}
