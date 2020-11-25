import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const charactersItems = props.charactersApp.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        character={character}
      />
    );
  });

  return (
    <section>
      {props.charactersApp.length !== 0 ? (
        <ul className="listContainer">{charactersItems}</ul>
      ) : (
        <p className="errorMessage">
          {`El personaje ${props.inputTextApp} no existe.`}
        </p>
      )}
    </section>
  );
};

export default CharacterList;
