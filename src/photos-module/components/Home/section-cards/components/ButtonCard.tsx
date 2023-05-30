import { useNavigate } from "react-router-dom"

export const ButtonCard = () => {

	const navigate = useNavigate();

	const handleNavigatePageStories = () => {
		navigate('/stories');
	}

	return (
		<>
			<button
				onClick={handleNavigatePageStories}
				className="button-storie">
				Read Story
				<img src='/assets/shared/desktop/arrow-white.svg' alt="arrow-white" />
			</button>
		</>
	)
}
