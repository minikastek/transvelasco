import React from 'react'
import './ScreensStyle.css'
import imgRegla from '../../assets/pictures/imgRegla.png'

export const CategoriasScreen = () => {
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
          <h1 className="texto-encima">Categorias</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="textoEncima">
            Todas las caracteristicas de cada categoria
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      <div>
        <div>
          <ul>
            <li>SENIOR A: Clase ORO (ECS)</li>
            <li>SENIOR B: Ex. Pilotos Senior de 32 años en adelante. Clase ORO (ECS)</li>
            <li>JUNIOR A: Clase PLATA (ECS)</li>
            <li>JUNIOR B: Clase PLATA (ECS)</li>
            <li>MASTER INICIAL: De 38 años en adelante pilotos que no compiten en ningun
                Campeonato Recorrido completo sin Enduro de la Muerte</li>
            <li>MASTER JUNIOR:43 a 48 cumplidos o a cumplir en este año en curso, Clase BRONCE (ECS)</li>
            <li>MASTER C: 48 a 55 años cumplidos o a cumplir en este año en curso. Reccorrido
                completo sin Enduro de la Muerte. Clase Hierro (ECS) </li>
            <li>DAMAS: Clase Diamante (ECS)</li>
            <li>PAREJA A: Dos pilotos recorrido completo sin Enduro de la Muerte</li>
            <li>PAREJA B: Dos pilotos que no compiten en ningun Campeonato sin experiencia
                Mitad del recorrido</li>
            <li>PADRE E HIJO: Recorrido completo sin Enduro de la Muerte "Classisc Series"</li>
            <li>PRINCIPANTES A: Motos libre Mitad del recorrido</li>
            <li>PRINCIPANTES B: Moto vieja generacion, XR,DT,DR, Ttr, Crf 230, Tornado
                Chinas Enduro Sport, mitad del recorrido</li>
            <li>CUATRIS SENIOR:</li>
            <li>CUATRIS JUNIOR:</li>
            <li>CUATRIS MASTER A: 38 A 45 años cumplidos o a cumplir en este año en curso</li>
            <li>CUATRIS MASTER B: 46 años cumplidos o a cumplir en este año en curso en adelante</li>
            <li>CUATRIS PROMOCIONAL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
