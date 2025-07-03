import { useEffect, useState } from "react";
import { getDifficulties } from "../../services/wordleServices";
import { useWordleContext } from "../../context/wordleContext";

const NavBar = () => {
  const { setCurrentDifficult, currentDifficult, playNewGame } =
    useWordleContext();
  const [difficulties, setDifficulties] = useState([]);
  useEffect(() => {
    getDifficulties().then((difficulties) => setDifficulties(difficulties));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <span className="navbar-brand">Wordle</span>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav gap-3 align-items-lg-center">
            <div className="dropdown ">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Level
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
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
            </div>
            <button
              className="btn border-0 text-danger me-auto p-0"
              onClick={() => playNewGame()}
            >
              Play again
            </button>
          </div>
          <span className="text-white fw-medium d-flex ms-auto align-items-lg-center my-lg-0 my-4">
            Level: {currentDifficult?.name}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
