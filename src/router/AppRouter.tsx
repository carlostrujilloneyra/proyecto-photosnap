import { Routes, Route, Navigate } from "react-router-dom"
import { Header, Footer } from '../photos-module/components/Home'
import { HomePage } from "../photos-module/pages/HomePage"
import { routes } from "./routes"

export const AppRouter = () => {
	return (
		<>
			<Header />

			<Routes>
				
				{
					routes.map(({ path, name, Component }) => {
						return <Route key={name} path={path} element={<Component />}/>
					})
				}
				
				<Route path='/' element={<HomePage />} />
				<Route path='/*' element={<HomePage />} />
				
				{/* Por si la ruta no existe */}
				<Route path='*' element={<Navigate to= '/'/>} />

			</Routes>

			{/* <Footer /> */}

		</>
	)
}
