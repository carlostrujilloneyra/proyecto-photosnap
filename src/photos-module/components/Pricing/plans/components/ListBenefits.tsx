import { Benefit } from '../../../../interfaces/pricing/pricing.interface';
import { BenefitPlan } from './BenefitPlan';

interface Props{
	benefits: Benefit[]
}

export const ListBenefits = ({benefits}: Props) => {
	return (
		<>
			<div className='container-benefits-plan'>
				{
					benefits.map((benefit) => {
						return <BenefitPlan key={benefit.text} benefit={benefit} />
					})
				}
			</div>
		</>
	)
}
