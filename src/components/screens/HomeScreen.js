import React from 'react';
import './ScreensStyle.css';
import imgHome from '../../assets/pictures/imgHome.jpg';
import YoutubeEmbed from "../helpers/YoutubeEmbed";
import Home1 from '../../assets/pictures/Home1.jpg'
import { Carousel } from 'react-bootstrap';
import transvelasco_1 from '../../assets/logo/transvelasco_1.png'
 

export const HomeScreen = () => {

  var idNuevo;
  var idViejo = "#IdIntercambiable";

  const CambioId = () => {
    const min = 1; 
    const max = 50;
    
    var id = Math.floor(Math.random()*(max - min + 1)) + min;

    idNuevo ="#id"+id.toString();
    
    const btnId = document.querySelector(".reset");

    btnId.setAttribute('id', idNuevo);

    console.log(id);
    console.log(idNuevo);
  } 

  const ResetId = () => {
    console.log("lo intente")
    const btnId = document.querySelector(".reset");

    btnId.setAttribute('id', idViejo);

  }

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
        <img 
          style={{
            width: 180,
          }}
          src={transvelasco_1}
        />
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

      {/* cuerpo */}
      <div className='color'>
        <div className='row align-items-start'>

          <div className='col'>
            <YoutubeEmbed embedId="6uc12BXmjd0" />
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col boxHome">
            <h1 style={{textAlign: 'center'}}>La Carrera</h1>
            <h3 style={{ fontSize: 20}}> En Abril de 1988 el Transvelasco, nace cuando un grupo de
                pilotos de enduro apasionados por esta actividad, deciden realizar una competencia 
                deportiva, que este año cumple 34 años y va por su 26º edición. 
                Buscando aprovechar las cualidades geográficas inmejorables para realizar esta
                actividad que nos ofrece tanto nuestra ciudad, apuntando principalmente a promover el
                deporte entre los jóvenes.
            </h3>

            <button
              id="IdIntercambiable"
              onClick={ResetId}
              className="reset"
            >
              Inscribirse
            </button> 

            <button
              id="CambioId"
              onClick={CambioId}
            >
              Cambiar id
            </button> 
          </div>
        </div>
      </div>
      
      <Carousel>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src="https://www.moto1pro.com/sites/default/files/enduropro_ktm_freeride_prueba_-_5_0.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>asdasdasdasdasdasdasdasd</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className='d-block w-100'
            src="https://www.motociclismo.es/uploads/s1/92/59/34/3/pistones-moto-motocross.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>asdasdasdasdasdasdasdasd</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className='d-block w-100'
            src="https://moto-station.com/wp-content/uploads/2022/02/11/garcia-gncc.jpg"
            alt="third slide"
          />
          <Carousel.Caption>
            <h3>third Slide Label</h3>
            <p>asdasdasdasdasdasdasdasd</p>
          </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
      <div className='color'>
        <div className='row align-items-start'>
            <div className="col boxHome">
               <h1 style={{textAlign: 'center'}}>La Prueba</h1>
               <h3 style={{ fontSize: 20}}> Una carrera de larga duracion donde se recorren mas de 180km que se dividiran en dos etapas.
               Comienza desde la localidad de pituil, subiendo en direccion al dique de Chañarmuyo, continua hacia la cuesta de La Aguadita,
               luego rumbo hacia la localidad de Famatica para asi llegar al circuito tradicional del Transvelasco en el puente de Capayan,
               pasando por el llamado Enduro de la muerte que este año lograriamos hacerlo en su totalidad saliendo en la localidad de Santa
               Florentina, siguiendo el recorrido tradicional hacia el circuito de la Olla. La segunda etapa comprende saliendo del circuito
               La Olla rumbo a la localidad de Nonogasta, comenzando su vuelta hacia la ciudad de Chilecito donde finaliza. 
               </h3>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <img
              src={Home1}
              className='col'
              style={{
                width: "50%",
                height: "50%",
                marginTop: 10
              }}
            />
        </div>
                         
      </div>
    </div>
  )
}
