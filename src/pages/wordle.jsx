import KeyBoard from "../components/keyBoard/keyBoard";
import WordBoard from "../components/wordBoard/wordBoard";
import { useEffect, useState } from "react";

const Wordle = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    setCurrentWord("");
    setAttempts([]);
  }, []);

  const keyPress = (key) => {
    if (key === "BACKSPACE") {
      setCurrentWord((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (currentWord.length === 5 && attempts.length < 6) {
        setAttempts((prev) => [...prev, currentWord]);
        setCurrentWord("");
      }
    } else if (currentWord.length < 5 && key.length === 1) {
      setCurrentWord((prev) => prev + key);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <WordBoard attempts={attempts} currentWord={currentWord} />
        <KeyBoard keyPress={keyPress} />
      </div>
    </>
  );
};

export default Wordle;
