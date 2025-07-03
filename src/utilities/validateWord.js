export const isCurrentWordIncomplete = (currentWord, playInfo) =>
  currentWord.length !== playInfo.wordLenght;

export const canTypeLetter = (currentWord, playInfo, attempts) =>
  currentWord.length < playInfo.wordLenght &&
  (attempts.length === 0 ||
    attempts[attempts.length - 1].some((l) => l.solution !== "correct"));

export const isLastAttemptCorrect = (attempts) =>
  attempts.length > 0 &&
  attempts[attempts.length - 1].every((l) => l.solution === "correct");

export const isMaxAttemptsReached = (attempts) => attempts.length === 6;
