import React from "react";
import "./Filter.scss";

const Filters = (props) => {
  // evento

  const handleFilter = (ev) => {
    props.handleFilterApp(ev.target.value);
  };

  //prevent submit
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filterContainer">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Busca tu personaje favorito: </label>
        <input
          className="filterContainer--input"
          type="text"
          id="name"
          onChange={handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
