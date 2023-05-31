
export interface HeroPricing{
	title: string,
	description: string,
	image: Image
}

interface Image{
	bg_mobile: string,
	bg_tablet: string,
	bg_desktop: string
}

export interface PricingPlan{
	title: string,
	description: string,
	price: number,
	frequency: string,
	bg_black: boolean
}