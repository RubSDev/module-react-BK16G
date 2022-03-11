import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world from react !</p>
        <a
          className="App-link"
          href="https://github.com/RubSDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soy RubS Github
        </a>
        <br />
        <footer>Kodemia ©2022 hecho con amor por RubS </footer>
      </header>
    </div>
  );
}

export default App;
