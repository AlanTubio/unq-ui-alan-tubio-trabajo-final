import "./wordBoard.css";

const WordBoard = ({ attempts, currentWord }) => {
  return (
    <div className="d-flex flex-column align-items-center my-4">
      {Array.from({ length: 6 }).map((_, rowI) => (
        <div key={rowI} className="d-flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border border-2 rounded m-1 d-flex align-items-center justify-content-center fs-3 fw-bold text-white sizeBox"
            >
              {rowI < attempts.length && attempts[rowI][i]}
              {rowI === attempts.length && currentWord[i]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordBoard;
