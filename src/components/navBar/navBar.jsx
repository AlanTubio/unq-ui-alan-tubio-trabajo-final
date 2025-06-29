import { useEffect, useState } from "react";
import { getDifficulties } from "../../services/wordleServices";
import { useWordleContext } from "../../context/wordleContext";

const NavBar = () => {
  const { setCurrentDifficult } = useWordleContext();
  const [difficulties, setDifficulties] = useState([]);
  useEffect(() => {
    getDifficulties().then((difficulties) => setDifficulties(difficulties));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <span className="navbar-brand">Wordle</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Level
              </a>
              <ul className="dropdown-menu">
                {difficulties.map((d) => (
                  <li key={d.id}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => setCurrentDifficult(d)}
                    >
                      {d.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
