import { PricingPlan } from '../../../../interfaces/pricing/pricing.interface';
import { ButtonPlan } from './ButtonPlan';
import { useState } from 'react';
import { ListBenefits } from './ListBenefits';


interface Props{
	plan: PricingPlan,
	getBoolean: boolean
}

export const CardPlan = ({ plan, getBoolean }: Props) => {
	
	const { title, description, price, frequency, bg_black, benefits } = plan;

	const [pricePlan] = useState<number>(price);

	return (
		<>
			<div className={`card-plan ${bg_black ? 'bg-black' : ''}`}>
				<h3>{title}</h3>
				<p>{description}</p>
				<h2>${getBoolean ? pricePlan*10 : pricePlan}.00</h2>
				<p>{frequency}</p>
				<ButtonPlan showColor={bg_black} />

				{/* Beneficios de cada plan */}
				<ListBenefits benefits={benefits} />

			</div>
		</>
	)
}
