import { Benefit } from '../../../../interfaces/pricing/pricing.interface';

interface Props{
	benefit: Benefit;
}

export const BenefitPlan = ({ benefit }: Props) => {
	
	const {icon, text} = benefit;

	return (
		<>
			<div className="benefit-grid">
				<img src={icon} alt="icon-plan" />
				<h4>{text}</h4>
			</div>
		</>
	)
}
