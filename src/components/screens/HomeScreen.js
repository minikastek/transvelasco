import React from 'react';
import './ScreensStyle.css';
import imgHome from '../../assets/pictures/imgHome.jpg';

export const HomeScreen = () => {
  return (
    <div>

      {/* Titulo */}
      <div className="contenedor" 
        style={{
          backgroundImage: `url(${imgHome})`,
        }}
      >
        <br/>
        <br/>
        <br/>
        <h1 className="textoEncima">
          Transvelasco
        </h1>
        <br/>
        <br/>
        <p className="textoEncima">
          Te hacemos vivir la aventura en el interior del país desde 1988
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> 
      </div>

      <div>
      </div>
      {/* cuerpo */}
      <div className="boxHome">
        <h1>La Carrera</h1>
        <h3 style={{ fontSize: 20}}>Desde sus primeras ediciones, en Abril de 1988 el Transvelasco, nace cuando un grupo de
            pilotos de enduro apasionados por esta actividad, y sin prever la magnitud del alcance que iba
            a tener, deciden realizar una competencia deportiva, que este año cumple 34 años y va por su
            26º edición, buscando aprovechar las cualidades geográficas inmejorables para realizar esta
            actividad que nos ofrece tanto nuestra ciudad, apuntando principalmente a promover el
            deporte entre los jóvenes
        </h3>
      </div>
    </div>
  )
}
