import { useEffect, useState } from "react";
import { getDifficulties } from "../../services/wordleServices";
import { useWordleContext } from "../../context/wordleContext";

const NavBar = () => {
  const { setCurrentDifficult, currentDifficult, reset } = useWordleContext();
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="dropdown ">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Level
              </button>
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
            <li>
              <button
                className="btn border-0 text-danger "
                onClick={() => reset()}
              >
                Reset
              </button>
            </li>
          </ul>
          <span className="text-white fw-medium">
            Level: {currentDifficult?.name}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
