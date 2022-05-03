const validFormInscripciones = (datos) => {
  let response = "";
  const {
    nombre,
    apellido,
    dni,
    marca,
    modelo,
    provincia,
    categoria,
    obraSocial,
    cumpleaños,
  } = datos;

  if (!datos) return "Datos incorrectos";

  if (!nombre || nombre.trim().length === 0) {
    response = "Nombre esta vacio";
    return response;
  }

  if (!apellido || apellido.trim().length === 0) {
    response = "Apellido esta vacio";
    return response;
  }

  if (!dni || dni.trim().length === 0 || isNaN(parseInt(dni, 8))) {
    response = "El Numero de documento esta vacio o no es valido";
    return response;
  }

  if (!marca || marca.trim().length === 0) {
    response = "Marca esta vacio";
    return response;
  }

  if (!modelo || modelo.trim().length === 0) {
    response = "Modelo esta vacio";
    return response;
  }

  if (!provincia || provincia.trim().length === 0) {
    response = "Provincia esta vacio";
    return response;
  }
  if (!categoria || categoria.trim().length === 0) {
    response = "Categoria esta vacio";
    return response;
  }
  if (!obraSocial || obraSocial.trim().length === 0) {
    response = "Obra Social esta vacio";
    return response;
  }

  if (!cumpleaños || cumpleaños.trim().length === 0) {
    response = "Cumpleaños esta vacio";
    return response;
  }

  return response;
};

export default validFormInscripciones;
