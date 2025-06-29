import KeyBoard from "../components/keyBoard/keyBoard";
import WordBoard from "../components/wordBoard/wordBoard";
import { useWordleContext } from "../context/wordleContext";
import { useEffect, useState } from "react";
import { getWord, checkWord } from "../services/wordleServices";
import { regla } from "../constants";

const Wordle = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [playInfo, setPlayInfo] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const { currentDifficult, countReset } = useWordleContext();

  useEffect(() => {
    getWord(currentDifficult.id).then((playInfo) => {
      setCurrentWord("");
      setAttempts([]);
      setPlayInfo(playInfo);
    });
  }, [currentDifficult, countReset]);

  const keyPress = (key) => {
    if (key === "BACKSPACE") {
      setCurrentWord((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (attempts.length < regla.intentos) {
        checkWord(playInfo.sessionId, currentWord.toLowerCase())
          .then((result) => {
            setAttempts((prev) => [...prev, result]);
            setCurrentWord("");
          })
          .catch((error) => {
            setErrorMsg(error);
            console.error(errorMsg);
          });
      }
    } else if (
      currentWord.length < playInfo.wordLenght &&
      (attempts.length === 0 ||
        attempts[attempts.length - 1].some((l) => l.solution !== "correct"))
    ) {
      setCurrentWord((prev) => prev + key);
    }
  };
  return (
    <>
      <div className="container-fluid">
        {playInfo && (
          <>
            <div className="container-fluid">
              {attempts.length > 0 &&
                attempts[attempts.length - 1].every(
                  (l) => l.solution === "correct"
                ) && (
                  <p className="text-white text-center fw-bold">
                    ¡Acertaste felicidades! 🎉
                  </p>
                )}
              {attempts.length === 6 && (
                <p className=" text-white text-center fw-bold">
                  ¡No tenes mas intentos! 😢
                </p>
              )}
              <WordBoard
                attempts={attempts}
                currentWord={currentWord}
                wordLenght={playInfo.wordLenght}
              />
              <KeyBoard keyPress={keyPress} attempts={attempts} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Wordle;
