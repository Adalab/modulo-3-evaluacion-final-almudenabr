import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./CharacterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/" className="link">
        <article className="item">
          <img
            className="item__img"
            src={props.foundCharacterApp.image}
            alt={`Imagen de ${props.foundCharacterApp.name}`}
          />
          <section className="item__info">
            <header className="item__info--title">
              <h2>{props.foundCharacterApp.name}</h2>
            </header>
            <ul className="item__info--list">
              <li>
                <span className="bold">Status: </span>
                {props.foundCharacterApp.status}
              </li>
              <li>
                <span className="bold">Species: </span>
                {props.foundCharacterApp.species}
              </li>
              <li>
                <span className="bold">Origin: </span>
                {props.foundCharacterApp.origin.name}
              </li>
              <li>
                <span className="bold">Episodes: </span>
                {props.foundCharacterApp.episode.length}
              </li>
            </ul>
          </section>
        </article>
      </Link>
    </div>
  );
};

export default CharacterDetail;
