import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />

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
