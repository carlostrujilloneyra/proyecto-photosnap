import { plansPricing } from "../../../data"
import { CardPlan, Switcher } from "./components"
import { useState } from 'react';

export const PlanPricing = () => {

	const [getBoolean, setGetBoolean] = useState<boolean>(false);

	return (
		<>
			<main className="main-pricing container">
				<Switcher setGetBoolean={setGetBoolean}  />
				<div className="container-grid-plans">
					{
						plansPricing.map((plan) => {
							return <CardPlan key={plan.title} plan={plan} getBoolean={getBoolean} />
						})
					}
				</div>
			</main>
		</>
	)
}
