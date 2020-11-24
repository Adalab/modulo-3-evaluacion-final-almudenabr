import React from "react";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  console.log(props);
  return (
    <>
      <li className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h4 className="card__name">{props.character.name}</h4>
        <p className="card__detail"> {props.character.species}</p>
      </li>
    </>
  );
};

export default CharacterCard;
