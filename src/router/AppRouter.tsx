import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "../photos-module/components/Home/header/Header";
import { HomePage } from "../photos-module/pages/HomePage"
import { routes } from "./routes"
import { Footer } from "../photos-module/components/Home/footer/Footer";

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
