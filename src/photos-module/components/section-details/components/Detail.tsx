import { Detail } from '../../../interfaces/details/details.interface';

interface Props{
	detail: Detail;
}

export const DetailElement = ({ detail }: Props) => {

	const {image, title, description} = detail;

	return (
		<>
			<div className='container-detail'>
				
				<div className='container-detail__image'>
					<picture>
						<img src={image} alt={description} />
					</picture>
				</div>

				<h3>{title}</h3>
				<p>{description}</p>

			</div>
		</>
	)
}
