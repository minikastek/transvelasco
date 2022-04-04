import React from 'react'
import './ScreensStyle.css'
import imgContacto from '../../assets/pictures/imgContacto.png'

export const ContactoScreen = () => {
  return (
    <div>
      <div
        className="contenedor"
        style= {{backgroundImage: `url(${imgContacto})`}}
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
            Te quedo alguna duda ? no dudes en contactarnos !
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  )
}
