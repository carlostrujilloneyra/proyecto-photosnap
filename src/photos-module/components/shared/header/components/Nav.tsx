import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../../../router/routes";
import { ToggleButton } from "./ToggleButton";

export const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pricing");
  };

  return (
    <>
      <div className="container-nav">
        <div>
          <nav>
            <ul className="list-header">
              {routes.map((route) => {
                return (
                  <li key={route.name}>
                    <Link className="links-header" to={route.to}>
                      {route.name}
                    </Link>
                  </li>
                );
              })}

            </ul>
          </nav>
        </div>

        <div className="container-button-header">
					<button
						className="main-button"
						onClick={handleNavigate}
					>
						Get a invite
					</button>
        </div>
      </div>

      {/* Aquí mostraré el botón hamburguesa */}
      <ToggleButton />

    </>
  );
};
