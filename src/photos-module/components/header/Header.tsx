import { Logo, Nav } from "./components"

export const Header = () => {
	return (
		<>
			<header className="main-header container">
				<Logo />
				<Nav />
			</header>
		</>
	)
}
