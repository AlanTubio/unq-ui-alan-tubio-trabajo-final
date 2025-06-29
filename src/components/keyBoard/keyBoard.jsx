import "./keyBoard.css";

const KeyBoard = ({ keyPress }) => {
  const KEYS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <div className="d-flex flex-column align-items-center my-3">
      {KEYS.map((rowKeys, i) => (
        <div key={i} className="mb-2 d-flex justify-content-center">
          {rowKeys.map((key) => (
            <button
              key={key}
              className="btn btn-outline-light mx-1 fw-bold key d-flex align-items-center justify-content-center"
              onClick={() => keyPress(key)}
            >
              {key}
            </button>
          ))}
          {i === 2 && (
            <>
              <button
                className="btn btn-outline-warning mx-1 key key-special d-flex align-items-center justify-content-center"
                onClick={() => keyPress("ENTER")}
              >
                ENTER
              </button>
              <button
                className="btn btn-outline-danger mx-1 key key-special d-flex align-items-center justify-content-center"
                onClick={() => keyPress("BACKSPACE")}
              >
                ⌫
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default KeyBoard;
