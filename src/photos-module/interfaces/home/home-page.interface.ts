
// Aquí irán los tipos de datos para la info a usar...

// Tipos de datos para "Home"

export interface articleInterface{
	subtitle: string,
	description: string,
	image: Image,
	buttonText: string,
	arrowButton: string,
	arrowButtonWhite: string,
	whiteColor: boolean
}

interface Image{
	bg_mobile: string,
	bg_desktop: string
}