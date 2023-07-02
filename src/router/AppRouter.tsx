import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { HomePage } from "../photos-module/pages/HomePage"
import { routes } from "./routes"
import { Footer, Header } from "../photos-module/components/shared"
import { AnimatePresence } from 'framer-motion';
import { ScrollTop } from "../photos-module/components/shared/ScrollTop";

export const AppRouter = () => {

	const location = useLocation();

	return (
		<>
			<ScrollTop />
			
			<Header />

			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					
					{
						routes.map(({ path, name, Component }) => {
							return <Route key={name} path={path} element={<Component />} />
						})
					}
					
					<Route path='/' element={<HomePage />} />
					<Route path='/*' element={<HomePage />} />
					
					{/* Por si la ruta no existe */}
					<Route path='*' element={<Navigate to= '/'/>} />

				</Routes>
			</AnimatePresence>

			<Footer />

		</>
	)
}
