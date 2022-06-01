
// import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link, Outlet } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
    <h1>Apppyyy!</h1>
    <nav>
    <Link to="/home">Homes</Link>
    </nav>
    <Outlet />
    </div>
    // <Router>
    //   <div>
    //       <Route exact path="/" component={Home} />
        
    //   </div>
    // </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
