import { HeroPricing, PricingPlan } from '../interfaces/pricing/pricing.interface';

export const heroPricing: HeroPricing = {
	title: 'Pricing',
	description: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
	image: {
		bg_mobile: '/assets/pricing/mobile/hero.jpg',
		bg_tablet: '/assets/pricing/tablet/hero.jpg',
		bg_desktop: '/assets/pricing/desktop/hero.jpg'
	}
}

export const plansPricing: PricingPlan[] = [
	{
		title: 'Basic',
		description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
		price: 19,
		frequency: 'per month',
		bg_black: false
	},

	{
		title: 'Pro',
		description: 'More advanced features available. Recommended for photography veterans and professionals.',
		price: 39,
		frequency: 'per month',
		bg_black: true
	},

	{
		title: 'Business',
		description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
		price: 99,
		frequency: 'per month',
		bg_black: false
	}
];