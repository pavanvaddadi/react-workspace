import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import AuthContext from "./utils/AuthContext";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Pavan Kumar",
    };

    setUserName(data.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Outlet />
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
