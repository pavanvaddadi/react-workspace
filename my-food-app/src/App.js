import "./App.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/G/good-food-logo-36B7F2C85D-seeklogo.com.png"
          alt="food logo"
          className="avatar"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
}

function ResCard() {

  return (
    <div className="res-card">
      <img className="my-card" src="https://b.zmtcdn.com/data/pictures/chains/9/51039/99b002b985def493b463c925ba4c70f6.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"></img>

    <div class="desc">
      <h5>Truffles Burger</h5>
      <div>Cost: 220</div>
      <div> Rating: 4.5</div>
      <div> Delivery:  30 min</div>
    </div>
    </div>
  )

}

function Body() {
  return (
    <div>
      <div className="searchBox">
        <h4>Search Here</h4>
      </div>
      <div className="card-container">
        <div className="res-container">
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
        </div>
      </div>
    </div>
  );
}

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
