import { createContext, useContext, useState } from "react";

const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
  const [currentDifficult, setCurrentDifficult] = useState({
    id: 1,
    name: "Easy",
  });
  const [countReset, setReset] = useState(0);

  const reset = () => setReset((prev) => prev + 1);

  return (
    <WordleContext.Provider
      value={{ currentDifficult, setCurrentDifficult, countReset, reset }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export const useWordleContext = () => useContext(WordleContext);
