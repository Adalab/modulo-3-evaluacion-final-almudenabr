import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./CharacterDetail.scss";

const CharacterDetail = (props) => {
  console.log(props.foundCharacterApp);
  console.log("Detail");
  return (
    <div className="item">
      <Link to="/">
        <article>
          <div>
            <img
              className="item__img"
              src={props.foundCharacterApp.image}
              alt={`Imagen de ${props.foundCharacterApp.name}`}
            />
          </div>
          <header>
            <h2>{props.foundCharacterApp.name}</h2>
          </header>
          <section>
            <ul>
              <li>Status: {props.foundCharacterApp.status}</li>
              <li>Species: {props.foundCharacterApp.species}</li>
              <li>Origin: {props.foundCharacterApp.origin.name}</li>
              <li>Episodes: 31</li>
            </ul>
          </section>
        </article>
      </Link>
    </div>
  );
};

export default CharacterDetail;
