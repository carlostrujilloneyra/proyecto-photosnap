import { Link } from "react-router-dom"
import { routes } from "../../../../router/routes"

export const NavFooter = () => {
	return (
		<>
			<nav className="nav-footer">
				<ul>
					<li><Link className="links-footer" to='/'>Home</Link></li>
					{
						routes.map(route => {
							return <li key={route.name}><Link className="links-footer" to={route.to}>{route.name}</Link></li>
						})
					}
				</ul>
			</nav>
		</>
	)
}
