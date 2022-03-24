import React from 'react'
import Achime from '../../assets/logo/Achime.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <div className=".container-fluid">
        <div className="text-center text-lg-start text-white bg-dark">
            <div className="container p-4 pb-0">

                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Organizadores
                            </h6>
                            <img
                                style={{
                                    width: 180
                                }}
                                src={Achime}/>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Informacion</h6>
                            <p>
                                Carrera
                            </p> 
                            <p>
                                Reglamento
                            </p>
                            <p>
                                Inscripciones
                            </p>
                            <p>
                                Alojamiento
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p><i className="fas fa-home mr-3"></i> Chilecito, La Rioja, Argentina</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Redes Sociales</h6>
       
                            <button className="btn btn-primary">
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </button>

                            <button className="btn btn-primary">
                                <FontAwesomeIcon icon="fab fa-twitter" />
                            </button>

                            <button className="btn btn-primary">
                                <FontAwesomeIcon icon="fab fa-google" />
                            </button>
                            
                            <button className="btn btn-primary">
                                <FontAwesomeIcon icon="fab fa-instagram" />
                            </button>
            
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center p-3">
                © 2022 Copyright Transvelasco
            </div>
        </div>
    </div>
  )
}


    {/* <h1 style={{
        color: 'white'
    }}>
        contacto y otras hierbas
    </h1>

    */}