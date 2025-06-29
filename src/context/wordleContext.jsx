import { createContext, useContext, useState } from "react";

const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
  const [currentDifficult, setCurrentDifficult] = useState({
    id: 1,
    name: "Easy",
  });

  return (
    <WordleContext.Provider value={{ currentDifficult, setCurrentDifficult }}>
      {children}
    </WordleContext.Provider>
  );
};

export const useWordleContext = () => useContext(WordleContext);
