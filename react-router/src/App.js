import './App.css';
 import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
// import User from "./components/User";
import ErrorPage from "./components/ErrorPage";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
             <NavLink activeClassName='active' exact to="/">Home</NavLink>  {/* Navlink ile active classı kullanıp aktif olan link görselini değitirebiliyoruz 
             inline olarak activeStyle içinde de yazabiliriz*/}
            </li>
            <li>
              <NavLink activeClassName='active' to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />          
          {/* <Route path="/user/:id" component={User} /> */}
          <Route path="*" component={ErrorPage}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
