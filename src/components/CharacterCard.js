import React from "react";
import "./CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character-detail/${props.character.id}`} className="link">
        <li className="card">
          <img
            className="card__img"
            src={props.character.image}
            alt={`Imagen de ${props.character.name}`}
          />
          <h4 className="card__name">{props.character.name}</h4>
          <p className="card__detail"> {props.character.species}</p>
        </li>
      </Link>
    </>
  );
};

export default CharacterCard;
