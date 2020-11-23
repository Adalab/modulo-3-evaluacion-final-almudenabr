import React from "react";
// import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Filters />
        <CharacterList />
        <CharacterDetail />
      </main>
    </>
  );
};

export default App;
