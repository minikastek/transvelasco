import React, {useState} from "react";
import './ScreensStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import imgInscripcion from '../../assets/pictures/imgInscripcion.png'
import { useForm } from '../../hooks/useForm'
import { setError, uiRemoveError } from "../actions/ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

export const InscripcionesScreen = () => {

  const [startDate, setStartDate] = useState(new Date());
  
  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui );

  const [formValues, handleInputChange] = useForm()

  const {nombre,apellido,dni,marca,modelo,provincia} = formValues;

  const isFormValid = () => {

    if (nombre.trim().length===0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      // dispatch( setError('Nombre esta vacio') );
      return false;
    } else if (apellido.trim().length===0) {
      dispatch( setError('Apellido esta vacio') );
      return false;
    } else if (dni.trim().length===0) {
      dispatch( setError('DNI esta vacio') );
      return false;
    } else if (marca.trim().length===0) {
      dispatch( setError('Marca esta vacio') );
      return false;
    } else if (modelo.trim().length===0) {
      dispatch( setError('Modelo esta vacio') );
      return false;
    } else if (provincia.trim().length===0) {
      dispatch( setError('Apellido esta vacio') );
      return false;
    } 

    dispatch( uiRemoveError () );
    return true;
}

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
      <div className="boxInscripcionesGrande">

        <div className="boxInscripciones">

          <form> 
            <label htmlFor="nombre">Nombre</label>
            <br/>

            <input
              className="input"
              id="nombre"
              name="nombre"
              type="nombre"
              autoComplete="off"
              value={nombre}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="apellido">Apellido</label>
            <br/>

            <input
              className="input"
              id="apellido"
              name="apellido"
              type="apellido"
              autoComplete="off"
              value={apellido}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="dni">DNI</label>
            <br/>

            <input
              className="input"
              id="dni"
              name="dni"
              type="dni"
              autoComplete="off"
              value={dni}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="marca">Marca</label>
            <br/>

            <input
              className="input"
              id="marca"
              name="marca"
              type="marca"
              autoComplete="off"
              value={marca}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="modelo">Modelo</label>
            <br/>

            <input
              className="input"
              id="modelo"
              name="modelo"
              type="modelo"
              autoComplete="off"
              value={modelo}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="provincia">Provincia</label>
            <br/>

            <input
              className="input"
              id="provincia"
              name="provincia"
              type="provincia"
              autoComplete="off"
              value={provincia}
              onChange={handleInputChange}
            />

            <br/>
            <label htmlFor="apellido">Categoria</label>
            <br/>

            <select class="input">
              <option selected></option>
              <option value="SENIOR A">SENIOR A</option>
              <option value="SENIOR B">SENIOR B</option>
              <option value="JUNIOR A">JUNIOR A</option>
              <option value="JUNIOR B">JUNIOR B</option>
              <option value="MASTER SENIOR">MASTER SENIOR</option>
              <option value="MASTER JUNIOR">MASTER JUNIOR</option>
              <option value="MASTER C">MASTER C</option>
              <option value="MASTER INICIAL">MASTER INICIAL</option>
              <option value="MASTER D">MASTER D</option>
              <option value="DAMAS">DAMAS</option>
              <option value="PAREJAS A">PAREJAS A</option>
              <option value="PAREJAS B">PAREJAS B</option>
              <option value="PADRE E HIJO">PADRE E HIJO</option>
              <option value="PROMOCIONAL">PROMOCIONAL</option>
              <option value="PRINCIPIANTE A">PRINCIPIANTE A</option>
              <option value="PRINCIPIANTE B">PRINCIPIANTE B</option>
              <option value="CUATRIS SENIOR">CUATRIS SENIOR</option>
              <option value="CUATRIS JUNIOR">CUATRIS JUNIOR</option>
              <option value="CUATRIS MASTER A">CUATRIS MASTER A</option>
              <option value="CUATRIS MASTER B">CUATRIS MASTER B</option>
              <option value="CUATRIS PROMOCIONAL">CUATRIS PROMOCIONAL</option>
            </select>

            <br/>
            <label htmlFor="apellido">Obra social</label>
            <br/>

            <select class="input">
              <option selected></option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>

            <br/>
            <label htmlFor="apellido">Cumpleaños</label>
            <br/>

            <DatePicker 
              selected={startDate} 
              className='input' 
              onChange={(date) => setStartDate(date)} 
            /> 

          </form>

            <button
              className="btn btn-primary" 
              type="submit"
              style={{
                marginTop: 10
              }}
            >
              Inscribirse !
            </button>
            
        </div>
      </div>

    </div>
  );

}
