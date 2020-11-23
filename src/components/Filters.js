import React from "react";

const Filters = (props) => {
  return (
    <section>
      <form>
        <label htmlFor="name">Busca tu personaje favorito: </label>
        <input type="text" id="name" />
      </form>
    </section>
  );
};

export default Filters;
