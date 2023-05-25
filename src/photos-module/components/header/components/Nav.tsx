import { Link } from 'react-router-dom';
import { routes } from '../../../../router/routes';

export const Nav = () => {
	return (
		<>
			<div className="container-nav">
				
				<div>
					<nav>
						<ul className="list-header">
							{
								routes.map((route) => {
									return (
										<li key={route.name}>
											<Link className='links-header' to={route.to}>{route.name}</Link>
										</li>
									)
								})
							}
						</ul>
					</nav>
				</div>

				<div>
					<button className="main-button">Get a invite</button>
				</div>

			</div>
		</>
	)
}
