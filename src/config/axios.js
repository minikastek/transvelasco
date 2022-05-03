import axios from "axios";

const clientAxios = axios.create({
  /* baseURL: process.env.REACT_APP_BACKEND_URL, */
  baseURL: "https://transvelascoback.herokuapp.com",
});

export default clientAxios;
