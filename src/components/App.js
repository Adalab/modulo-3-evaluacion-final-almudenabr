import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import api from "../services/api";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  //api

  useEffect(() => {
    //función que se va a ejecutar al montar componente
    api.getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //event
  const handleFilter = (filterText) => {
    setFilterText(filterText); //guardo en el estado los datos del input
  };

  //filtered text
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterText.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
      // if (routeCharacterId === character.id) {
      //   return true;
      // } else {
      //   return false;
      // }
    });
    console.log(foundCharacter);
    return;
    <CharacterDetail />;
  };

  return (
    <>
      <Header />

      <main>
        <Filters handleFilterApp={handleFilter} />
        <CharacterList charactersApp={filteredCharacters} />
        <Switch>
          <Route
            path="/character-detail/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </>
  );
};

export default App;
