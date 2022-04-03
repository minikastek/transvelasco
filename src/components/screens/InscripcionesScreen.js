import React from "react";
import './HomeScreen.css'
import imgInscripcion from '../../assets/pictures/imgInscripcion.png'

export const InscripcionesScreen = () => {

  return (
    <div>
      {/* Titulo */}
      <div
        className="contenedor"
        style= {{backgroundImage: `url(${imgInscripcion})`}}
      > 
        <div className='boxTitulo'>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="texto-encima">Inscripciones</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="textoEncima">
            Aqui comienza tu nueva aventura
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      {/* cuerpo */}
      
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
    </div>
  );

}
