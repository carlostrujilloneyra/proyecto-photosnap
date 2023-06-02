import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../../../router/routes";
import { ToggleButton } from "./ToggleButton";
import { useRef, useState } from "react";

export const Nav = () => {

  const [showCloseIcon, setShowCloseIcon] = useState<boolean>(true);

  const navRef: any = useRef();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navRef.current.classList.remove('new-nav');
    setShowCloseIcon(!showCloseIcon);
    navigate("/pricing");
  };

  const removeClassNav = () => {
    navRef.current.classList.remove('new-nav');
    setShowCloseIcon(!showCloseIcon);
  }

  return (
    <>
      <div ref={navRef} className="container-nav">
        <div>
          <nav>
            <ul className="list-header">
              {routes.map((route) => {
                return (
                  <li onClick={removeClassNav} key={route.name}>
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
      <ToggleButton showCloseIcon={showCloseIcon} navRef={navRef} />

    </>
  );
};
