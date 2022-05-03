import React, { Fragment } from "react";
import "./ScreensStyle.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import imgInscripcion from "../../assets/pictures/imgInscripcion.png";
import { useForm } from "../../hooks/useForm";
import {
  setError,
  uiRemoveError,
  startLoading,
  finishLoading,
} from "../actions/ui";
import "react-datepicker/dist/react-datepicker.css";
import validFormInscripciones from "../../validation/validFormInscripciones";
import { crearInscripcion } from "../../api/comsumirApi";
import Spinner from "../spinner/Spinner";

export const InscripcionesScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    apellido: "",
    dni: "",
    marca: "",
    modelo: "",
    provincia: "",
    categoria: "",
    obraSocial: "",
    cumpleaños: "",
  });

  const { nombre, apellido, dni, marca, modelo, provincia, cumpleaños } =
    formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = validFormInscripciones(formValues);
    if (result !== "") {
      dispatch(setError(result));
      return;
    }

    //Saco todo los errores
    dispatch(uiRemoveError());

    //Cargo loading
    dispatch(startLoading());

    //Realizo peticion a api
    const data = await crearInscripcion(formValues);
    dispatch(finishLoading());

    //Pregunto si se cargo correctametne la inscripcion
    if (data.status !== 200) {
      dispatch(setError("No se pudo cargar la inscripcion! "));
      return;
    }

    //Muestro mensaje
    Swal.fire({
      icon: "success",
      title: "Su inscripcion se cargo correctamente!",
      showConfirmButton: true,
    });

    reset();
  };

  return (
    <div>
      {/* Titulo */}
      <div
        className="contenedor"
        style={{ backgroundImage: `url(${imgInscripcion})` }}
      >
        <div className="boxTitulo">
          <br />
          <br />
          <br />
          <br />
          <h1 className="texto-encima">Inscripciones</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="textoEncima">Aqui comienza tu nueva aventura</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* cuerpo */}
      <div className="boxInscripcionesGrande">
        <div className="boxInscripciones">
          {loading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit} autoComplete="false">
              <Fragment>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    placeholder="Ingrese su nombre"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="nombre">
                    <b>Nombre</b>
                  </label>
                </div>

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    value={apellido}
                    placeholder="Ingrese su apellido"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="apellido">
                    <b>Apellido</b>
                  </label>
                </div>

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    value={dni}
                    placeholder="Ingrese su dni"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="dni">
                    <b>Numero documento</b>
                  </label>
                </div>

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="marca"
                    value={marca}
                    placeholder="Ingrese su marca"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="marca">
                    <b>Marca</b>
                  </label>
                </div>

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="modelo"
                    value={modelo}
                    placeholder="Ingrese su modelo"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="modelo">
                    <b>Modelo</b>
                  </label>
                </div>

                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="provincia"
                    value={provincia}
                    placeholder="Ingrese su provincia"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="provincia">
                    <b>Provincia</b>
                  </label>
                </div>

                <div className="mb-2">
                  <select
                    className="form-select"
                    name="categoria"
                    onChange={handleInputChange}
                    style={{
                      fontWeight: 700,
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione una categoria
                    </option>
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
                    <option value="CUATRIS PROMOCIONAL">
                      CUATRIS PROMOCIONAL
                    </option>
                  </select>
                </div>

                <div className="mb-2">
                  <select
                    className="form-select"
                    name="obraSocial"
                    onChange={handleInputChange}
                    style={{
                      fontWeight: 700,
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione si posee obra social
                    </option>
                    <option value="SI">Si</option>
                    <option value="NO">No</option>
                  </select>
                </div>

                <div className=" form-floating mb-2">
                  <input
                    type="date"
                    className="form-control"
                    name="cumpleaños"
                    value={cumpleaños}
                    onChange={handleInputChange}
                    style={{
                      fontWeight: 700,
                    }}
                  />
                  <label htmlFor="cumpleaños">
                    <b>Fecha Cumpleaños</b>
                  </label>
                </div>
              </Fragment>

              {/* Muestri mensaje de error */}
              {msgError && (
                <div className="alert alert-danger" role="alert">
                  {msgError}
                </div>
              )}

              <button
                className="btn btn-primary"
                type="submit"
                style={{
                  marginTop: 10,
                }}
              >
                Inscribirse !
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
