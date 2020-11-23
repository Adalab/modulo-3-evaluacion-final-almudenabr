import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    <section>
      <ul className="listContainer">
        <CharacterCard />
      </ul>
    </section>
  );
};

export default CharacterList;
