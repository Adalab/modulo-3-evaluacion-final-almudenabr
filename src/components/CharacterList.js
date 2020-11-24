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
      <ul className="listContainer">{charactersItems}</ul>
    </section>
  );
};

export default CharacterList;
