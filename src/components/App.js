import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import api from "../services/api";
import Loading from "./Loading";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //api

  useEffect(() => {
    //funtion to be excuted when component is mounted
    setIsLoading(true);
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      setIsLoading(false);
    });
  }, []);

  //event
  const handleFilter = (filterText) => {
    setFilterText(filterText); //keep in the state the data from input
  };

  //filtered text
  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterText.toUpperCase());
  });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return parseInt(routeCharacterId) === character.id;

      ///It is the same that:
      // if (parseInt(routeCharacterId) === character.id) {
      //   return true;
      // } else {
      //   return false;
      // }
    });

    //error message when url is wrong or it does not exist in API
    if (foundCharacter === undefined) {
      return (
        <p className="errorMessage">
          Lo sentimos, ese personaje no es de esta galaxia.
        </p>
      );
    } else {
      return <CharacterDetail foundCharacterApp={foundCharacter} />;
    }
  };

  return (
    <>
      {/* Loading */}
      {isLoading === true ? <Loading /> : null}

      <Header />
      <main>
        <Filters handleFilterApp={handleFilter} />
        <Switch>
          <Route exact path="/">
            <CharacterList charactersApp={filteredCharacters} />
          </Route>
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
