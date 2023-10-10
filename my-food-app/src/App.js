import "./App.css";
import { Header } from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
      </header>
    </div>
  );
}

export default App;
