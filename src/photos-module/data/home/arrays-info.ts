import { articlesInterface } from '../../interfaces/home-page.interface';

// Aquí irán los arreglos con info a utilizar en los componentes...

export const articlesArray: articlesInterface [] = [
	{
		subtitle: 'Create and share your photo stories',
		description: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
		image: {
			bg_mobile: '/src/assets/home/mobile/create-and-share.jpg',
			bg_desktop: '/src/assets/home/desktop/create-and-share.jpg'
		}
	},

	{
		subtitle: 'Beautiful stories every time',
		description: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
		image: {
			bg_mobile: '/src/assets/home/mobile/beautiful-stories.jpg',
			bg_desktop: '/src/assets/home/desktop/beautiful-stories.jpg'
		}
	},

	{
		subtitle: 'Designed for everyone',
		description: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
		image: {
			bg_mobile: '/src/assets/home/mobile/designed-for-everyone.jpg',
			bg_desktop: '/src/assets/home/desktop/designed-for-everyone.jpg'
		}
	}
	
];