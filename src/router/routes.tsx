import { FeaturesPage, PricingPage, StoriesPage } from "../photos-module/pages";

type JSXComponent = () => JSX.Element;

interface Route{
	to: string,
	path: string,
	Component: JSXComponent,
	name: string
}

export const routes: Route[] = [
	{
		to: '/stories',
		path: '/stories',
		Component: StoriesPage,
		name: 'Stories'
	},

	{
		to: '/features',
		path: '/features',
		Component: FeaturesPage,
		name: 'Features'
	},

	{
		to: '/pricing',
		path: '/pricing',
		Component: PricingPage,
		name: 'Pricing'
	}

]