import React, { useState, useEffect } from "react";
// import { Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import api from "../services/api";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);

  //api

  useEffect(() => {
    //función que se va a ejecutar al montar componente
    api.getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //event
  const handleFilter = (filterText) => {
    console.log("Cambio datos App", filterText);
  };

  return (
    <>
      <Header />

      <main>
        <Filters handleFilterApp={handleFilter} />
        <CharacterList charactersApp={characters} />
        {/* <CharacterDetail /> */}
      </main>
    </>
  );
};

export default App;
