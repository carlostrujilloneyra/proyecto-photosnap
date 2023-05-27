import { Storie } from '../interfaces/stories/stores.interface';

export const storiesHome: Storie[] = [
	{
		image: {
			bg_mobile: '../../assets/stories/mobile/mountains.jpg',
			bg_desktop: '../../assets/stories/desktop/mountains.jpg'
		},
		name: 'The Mountains',
		author: 'John Appleseed',
		textButton: 'Read Story',
		arrowButtonWhite: '../../assets/shared/desktop/arrow-white.svg'
	},

	{
		image: {
			bg_mobile: '../../assets/stories/mobile/cityscapes.jpg',
			bg_desktop: '../../assets/stories/desktop/cityscapes.jpg'
		},
		name: 'Sunset Cityscapes',
		author: 'Benjamin Cruz',
		textButton: 'Read Story',
		arrowButtonWhite: '../../assets/shared/desktop/arrow-white.svg'
	},

	{
		image: {
			bg_mobile: '../../assets/stories/mobile/18-days-voyage.jpg',
			bg_desktop: '../../assets/stories/desktop/18-days-voyage.jpg'
		},
		name: '18 Days Voyage',
		author: 'Alexei Borodin',
		textButton: 'Read Story',
		arrowButtonWhite: '../../assets/shared/desktop/arrow-white.svg'
	},

	{
		image: {
			bg_mobile: '../../assets/stories/mobile/architecturals.jpg',
			bg_desktop: '../../assets/stories/desktop/architecturals.jpg'
		},
		name: 'Architecturals',
		author: 'Samantha Brooke',
		textButton: 'Read Story',
		arrowButtonWhite: '../../assets/shared/desktop/arrow-white.svg'
	}

];
