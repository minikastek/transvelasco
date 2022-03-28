import React from 'react'
import './HomeScreen.css'

export const HomeScreen = () => {
  return (
    <div>
      <div className="contenedor">
        <h1
          className="texto-encima">
            HomeScreen
        </h1>

        <img style={{
          width: "100%"
        }} 
          src="https://www.formulamoto.es/wp-content/uploads/2021/11/motos_trail.jpg"/>
      </div>
      <div>
        <h1>La Carrera</h1>
        <h3>Desde sus primeras ediciones, en Abril de 1988 el Transvelasco, nace cuando un grupo de
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