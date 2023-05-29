import { useNavigate } from "react-router-dom"

interface Props{
	button: Button
}

interface Button{
	buttonText: string,
	whiteColor: boolean,
	arrowButtonWhite: string,
	arrowButton: string,
	navigateRoute: string
}

export const Button = (
	{ button: { buttonText, whiteColor, arrowButtonWhite, arrowButton, navigateRoute } }: Props) => {
	
	const navigate = useNavigate();	

	const handleNavigate = (route: string): void => {
		navigate(route);
	}

	return (
		<>
			<button
				className={`button-article ${whiteColor ? 'white' : ''}`}
				onClick={() => handleNavigate(navigateRoute)}
			>
				{buttonText}
				<img
					src={whiteColor ? arrowButtonWhite : arrowButton}
					alt="arrow-button"
				/>
			</button>
		</>
	)
}
