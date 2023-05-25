import { useNavigate } from "react-router-dom"

interface Props{
	button: Button
}

interface Button{
	buttonText: string,
	whiteColor: boolean,
	arrowButtonWhite: string,
	arrowButton: string
}

export const Button = (
	{ button: { buttonText, whiteColor, arrowButtonWhite, arrowButton } }: Props) => {
	
	const navigate = useNavigate();
	
	const handleNavigate = () => {
		navigate('/pricing')
	}

	return (
		<>
			<button
				className={`button-article ${whiteColor ? 'white' : ''}`}
				onClick={handleNavigate}
			>
				{buttonText}
				<img src={whiteColor ? arrowButtonWhite : arrowButton} alt="arrow-button" />
			</button>
		</>
	)
}
