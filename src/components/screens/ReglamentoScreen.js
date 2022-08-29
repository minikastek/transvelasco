import React from 'react'
import './ScreensStyle.css'
import imgRegla from '../../assets/pictures/imgRegla.png'

export const ReglamentoScreen = () => {
  return (
    <div>
      {/* Titulo */}
      <div
        className="contenedor"
        style= {{backgroundImage: `url(${imgRegla})`}}
      > 
        <div className='boxTitulo'>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="texto-encima">Reglamento</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="textoEncima">
            Todo lo que tenes que tener en cuenta para correr seguro
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
