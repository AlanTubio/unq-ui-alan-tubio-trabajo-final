import "./App.css";
import NavBar from "./components/navBar/navBar";
import Wordle from "./pages/wordle";
import { WordleProvider } from "./context/wordleContext";

function App() {
  return (
    <>
      <WordleProvider>
        <NavBar />
        <Wordle />
      </WordleProvider>
    </>
  );
}

export default App;
