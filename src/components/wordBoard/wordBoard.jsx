import "./wordBoard.css";
import { regla } from "../../constants";
const WordBoard = ({ attempts, currentWord, wordLenght }) => {
  const solution = {
    correct: "bg-success text-white",
    elsewhere: "bg-warning text-dark",
    absent: "bg-secondary text-white",
  };

  return (
    <div className="d-flex flex-column align-items-center my-4">
      {Array.from({ length: regla.intentos }).map((_, rowI) => (
        <div key={rowI} className="d-flex mb-2">
          {Array.from({ length: wordLenght }).map((_, i) => {
            let letter = "";
            let colorBoard = "text-white";
            if (rowI < attempts.length) {
              letter = attempts[rowI][i].letter.toUpperCase();
              colorBoard = solution[attempts[rowI][i].solution];
            }
            if (rowI === attempts.length) {
              letter = currentWord[i];
            }
            return (
              <div
                key={i}
                className={`border border-2 rounded m-1 d-flex align-items-center justify-content-center fs-3 fw-bold sizeBox ${colorBoard}`}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WordBoard;
