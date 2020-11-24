import React from "react";

const Filters = (props) => {
  //evento

  const handleFilter = (ev) => {
    props.handleFilterApp(ev.target.value);
  };
  return (
    <section>
      <form>
        <label htmlFor="name">Busca tu personaje favorito: </label>
        <input type="text" id="name" onChange={handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
