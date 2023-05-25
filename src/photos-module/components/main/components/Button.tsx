
interface Props{
	button: Button
}

interface Button{
	buttonText: string,
	whiteColor: boolean,
	arrowButtonWhite: string,
	arrowButton: string
}

export const Button = ({ button: { buttonText, whiteColor, arrowButtonWhite, arrowButton } }: Props) => {
	
	console.log(buttonText)

	return (
		<>
			<button
				className={`button-article ${whiteColor ? 'white': ''}`}
			>
				{buttonText}
				<img src={whiteColor ? arrowButtonWhite : arrowButton} alt="arrow-button" />
			</button>
		</>
	)
}
