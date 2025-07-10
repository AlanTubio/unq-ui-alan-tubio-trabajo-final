import KeyBoard from "../components/keyBoard/keyBoard";
import WordBoard from "../components/wordBoard/wordBoard";
import { useWordleContext } from "../context/wordleContext";
import { checkWord } from "../services/wordleServices";
import { regla } from "../constants";
import {
  isCurrentWordIncomplete,
  canTypeLetter,
  isLastAttemptCorrect,
  isMaxAttemptsReached,
} from "../utilities/validateWord";

const Wordle = () => {
  const {
    setCurrentWord,
    currentWord,
    attempts,
    setAttempts,
    playInfo,
    errorMsg,
    setErrorMsg,
  } = useWordleContext();

  const keyPress = (key) => {
    setErrorMsg("");
    if (key === "BACKSPACE") {
      setCurrentWord((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (isCurrentWordIncomplete(currentWord, playInfo)) {
        setErrorMsg(`The word must have ${playInfo.wordLenght} letters.`);
      } else if (attempts.length < regla.intentos) {
        checkWord(playInfo.sessionId, currentWord.toLowerCase())
          .then((result) => {
            setAttempts((prev) => [...prev, result]);
            setCurrentWord("");
          })
          .catch((error) => {
            setErrorMsg(error);
          });
      }
    } else if (canTypeLetter(currentWord, playInfo, attempts)) {
      setCurrentWord((prev) => prev + key);
    }
  };
  return (
    <>
      <div className="container-fluid">
        {errorMsg && (
          <h5 className="text-white text-center fw-bold">{errorMsg}</h5>
        )}
        {playInfo && (
          <>
            {isLastAttemptCorrect(attempts) && (
              <h5 className="text-white text-center fw-bold">
                You guessed the word, congratulations! 🎉
              </h5>
            )}
            {!isLastAttemptCorrect(attempts) &&
              isMaxAttemptsReached(attempts) && (
                <h5 className=" text-white text-center fw-bold">
                  You have no more attempts! 😢
                </h5>
              )}
            <WordBoard
              attempts={attempts}
              currentWord={currentWord}
              wordLenght={playInfo.wordLenght}
            />
            <KeyBoard keyPress={keyPress} attempts={attempts} />
          </>
        )}
      </div>
    </>
  );
};

export default Wordle;
