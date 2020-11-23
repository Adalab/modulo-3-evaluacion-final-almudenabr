import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <>
        Hola mundo
        {/* <nav>
          <ul>
            <li>
              {/* **** añado comp Link para convertir las rutas en enlaces */}
        {/* <Link to="/">Home</Link> */}
        {/* </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main> */}
        {/* ****para rutas si son necesarias */}
        {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main> */}
      </>
    );
  }
}

export default App;
