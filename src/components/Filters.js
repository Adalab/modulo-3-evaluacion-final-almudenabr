import React from "react";
import "./Filters.scss";

const Filters = (props) => {
  // evento

  const handleFilter = (ev) => {
    props.handleFilterApp(ev.target.value);
  };

  const handleSelect = (ev) => {
    props.handleSelectApp(ev.target.value);
  };

  //prevent submit
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="filterContainer">
      <form onSubmit={handleFormSubmit}>
        <label className="filterContainer--label" htmlFor="name">
          Busca tu personaje favorito:
        </label>
        <input
          className="filterContainer--input"
          type="text"
          id="name"
          onChange={handleFilter}
        />
        <label htmlFor="status"></label>
        <select name="status" id="status" onChange={handleSelect}>
          <option value="Select gender">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unkown">Unkown</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
