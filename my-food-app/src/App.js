import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
