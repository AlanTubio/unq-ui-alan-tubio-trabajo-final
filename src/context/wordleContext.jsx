import { createContext, useContext, useState, useEffect } from "react";
import { getWord } from "../services/wordleServices";

const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
  const [currentDifficult, setCurrentDifficult] = useState({
    id: 1,
    name: "Easy",
  });
  const [currentWord, setCurrentWord] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [playInfo, setPlayInfo] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const playNewGame = () => {
    getWord(currentDifficult.id).then((playInfo) => {
      setErrorMsg("");
      setCurrentWord("");
      setAttempts([]);
      setPlayInfo(playInfo);
    });
  };

  useEffect(() => {
    playNewGame();
  }, [currentDifficult]);

  return (
    <WordleContext.Provider
      value={{
        currentDifficult,
        setCurrentDifficult,
        currentWord,
        setCurrentWord,
        attempts,
        setAttempts,
        playInfo,
        playNewGame,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export const useWordleContext = () => useContext(WordleContext);
