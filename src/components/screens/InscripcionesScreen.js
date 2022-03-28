import React from "react";

export const InscripcionesScreen = () => {

  return (
    <form >
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        type="nombre"
        // value={values.nombre}
        // onChange={handleChange}
      />
      <br/>
      <label htmlFor="apellido">Apellido</label>
      <input
        id="apellido"
        name="apellido"
        type="apellido"
        // value={values.apellido}
        // onChange={handleChange}
      />
      <br/>
      <label htmlFor="dni">DNI</label>
      <input
        id="dni"
        name="dni"
        type="dni"
        // value={values.dni}
        // onChange={handleChange}
      />
      <br/>
      <label htmlFor="marca">Marca</label>
      <input
        id="marca"
        name="marca"
        type="marca"
        // value={values.marca}
        // onChange={handleChange}
      />
      <br/>
      <label htmlFor="modelo">Modelo</label>
      <input
        id="modelo"
        name="modelo"
        type="modelo"
        // value={values.Modelo}
        // onChange={handleChange}
      />
      <br/>
      <label htmlFor="provincia">Provincia</label>
      <input
        id="provincia"
        name="provincia"
        type="provincia"
        // value={values.Modelo}
        // onChange={handleChange}
      />
      <br/>
      <button type="submit">Sign Up</button>
    </form>
  );

}
