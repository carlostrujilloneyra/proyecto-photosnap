

interface Props{
	showColor: boolean
}

export const ButtonPlan = ({ showColor }: Props) => {

	return (
		<>
			<button className={`button-plan ${showColor? 'bg-white': ''}`}>Pick Plan</button>
		</>
	)
}
