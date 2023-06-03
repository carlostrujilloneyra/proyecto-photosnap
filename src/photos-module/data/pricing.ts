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
		bg_black: false,
		benefits: [
			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Unlimited story posting'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Unlimited photo upload'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Embedding custom content'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Customize metada'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Advanced Metrics'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Photo downloads'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Search engine indexing'
			},

			{
				icon: '/assets/pricing/desktop/x-black.svg',
				text: 'Custom analytics'
			}
		]
	},

	{
		title: 'Pro',
		description: 'More advanced features available. Recommended for photography veterans and professionals.',
		price: 39,
		frequency: 'per month',
		bg_black: true,
		benefits: [
			{
				icon: '/assets/pricing/desktop/check-white.svg',
				text: 'Unlimited story posting'
			},

			{
				icon: '/assets/pricing/desktop/check-white.svg',
				text: 'Unlimited photo upload'
			},

			{
				icon: '/assets/pricing/desktop/check-white.svg',
				text: 'Embedding custom content'
			},

			{
				icon: '/assets/pricing/desktop/check-white.svg',
				text: 'Customize metada'
			},

			{
				icon: '/assets/pricing/desktop/x-white.svg',
				text: 'Advanced Metrics'
			},

			{
				icon: '/assets/pricing/desktop/x-white.svg',
				text: 'Photo downloads'
			},

			{
				icon: '/assets/pricing/desktop/x-white.svg',
				text: 'Search engine indexing'
			},

			{
				icon: '/assets/pricing/desktop/x-white.svg',
				text: 'Custom analytics'
			}
		]
	},

	{
		title: 'Business',
		description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
		price: 99,
		frequency: 'per month',
		bg_black: false,
		benefits: [
			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Unlimited story posting'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Unlimited photo upload'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Embedding custom content'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Customize metada'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Advanced Metrics'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Photo downloads'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Search engine indexing'
			},

			{
				icon: '/assets/pricing/desktop/check-dark.svg',
				text: 'Custom analytics'
			}
		]
	}
];