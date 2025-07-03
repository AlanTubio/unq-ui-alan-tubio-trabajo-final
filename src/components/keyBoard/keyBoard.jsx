import "./keyBoard.css";

const KeyBoard = ({ keyPress, attempts }) => {
  const KEYS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const solution = {
    correct: "btn-outline-success",
    elsewhere: "btn-outline-warning",
    absent: "btn-outline-secondary",
  };
  const getKeyStatus = (attempts) => {
    const status = {};
    attempts.forEach((attempt) => {
      attempt.map(({ letter, solution }) => {
        if (solution === "correct") status[letter.toUpperCase()] = "correct";
        else if (
          solution === "elsewhere" &&
          status[letter.toUpperCase()] !== "correct"
        )
          status[letter.toUpperCase()] = "elsewhere";
        else if (solution === "absent" && !status[letter.toUpperCase()])
          status[letter.toUpperCase()] = "absent";
      });
    });
    return status;
  };
  const keyStatus = getKeyStatus(attempts);

  return (
    <div className="d-flex flex-column align-items-center my-3">
      {KEYS.map((rowKeys, i) => (
        <div key={i} className="mb-2 d-flex justify-content-center">
          {rowKeys.map((key) => {
            let colorKey = "btn-outline-light";
            if (keyStatus[key]) {
              colorKey = solution[keyStatus[key]];
            }
            return (
              <button
                key={key}
                className={`btn mx-1 fw-bold key d-flex align-items-center justify-content-center ${colorKey}`}
                onClick={() => keyPress(key)}
              >
                {key}
              </button>
            );
          })}
          {i === 2 && (
            <>
              <button
                className="btn btn-outline-info mx-1 key-special d-flex align-items-center justify-content-center"
                onClick={() => keyPress("ENTER")}
              >
                ENTER
              </button>
              <button
                className="btn btn-outline-danger mx-1 key-special d-flex align-items-center justify-content-center"
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
