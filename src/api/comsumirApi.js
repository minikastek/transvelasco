import clientAxios from "../config/axios";

export const listarInscripciones = async () => {
  let data = [];
  try {
    const response = await clientAxios.get("/api/inscripcion/");
    data = response.data.inscripciones;
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return data;
};

export const crearInscripcion = async (datos) => {
  try {
    const response = await clientAxios.post("/api/inscripcion/", datos);
    return response;
  } catch (error) {
    console.log(error);
  }
};
