import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>

      <main>
        <section>
          <form>
            <label htmlFor="name"></label>
            <input type="text" id="name" />
          </form>
        </section>

        <section>
          <ul className="listContainer">
            <li className="cardItem">
              <h2>
                <p></p>
              </h2>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
