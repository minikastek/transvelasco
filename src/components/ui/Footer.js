import React from 'react'
import Achime from '../../assets/logo/Achime.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {  NavLink } from 'react-router-dom'


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
                            
                            <a 
                                target="_blank" 
                                href="https://www.facebook.com/achime.chilecito"
                            >
                            <img
                                style={{
                                    width: 180
                                }}
                                src={Achime}/>
                            </a>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Información</h6>

                            <NavLink
                                to="/carrera"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Carrera
                            </NavLink>

                            <NavLink
                                to="/categorias"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Categorias
                            </NavLink>

                            <NavLink
                                to="/inscripciones"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Inscripciones
                            </NavLink>

                            <NavLink
                                to="/aloja"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                            >
                                Alojamiento
                            </NavLink>

                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p><i className="fas fa-home mr-3"></i> Chilecito, La Rioja, Argentina</p>
                            <p><i className="fas fa-envelope mr-3"></i> Achime_chilecito@hotmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> 3825 534813 </p>
                            <p><i className="fas fa-print mr-3"></i> 3825 443076</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Redes Sociales</h6>

                            <a 
                                target="_blank" 
                                href="https://www.facebook.com/Transvelasco-101016614065782"
                            >  
                                <button 
                                    className="btn btn-primary" style={{
                                        margin: 10,
                                        borderRadius: 10
                                    }}>
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </button>
                            </a>  
                            <br/>
                            <a 
                                target="_blank" 
                                href="https://www.instagram.com/transvelasco_oficial1/"
                            >
                                <button className="btn btn-primary"style={{
                                    margin: 10,
                                    borderRadius: 10
                                }}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </a>
                            <br/>
                            <a 
                                target="_blank" 
                                href="http://google.com"
                            >
                                <button className="btn btn-primary"style={{
                                    margin: 10,
                                    borderRadius: 10,
                                    height: 40,
                                    width: 40,
                                }}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </button>
                            </a>
            
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