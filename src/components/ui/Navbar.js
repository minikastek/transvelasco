import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import transvelasco_2 from '../../assets/logo/transvelasco_2.png'

export const Navbar = () => {

    const navigate = useNavigate();
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">
            
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <img 

                        style={{
                            width: 180,
                        }}
                        src={transvelasco_2}
                    />
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <NavLink 
                            className="nav-item nav-link" 
                            to="/sobre"
                        >
                            Sobre nosotros
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/circuito"
                        >
                            Circuito
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/carrera"
                        >
                            Carrera
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/reglamento"
                        >
                            Reglamento
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/inscripciones"
                        >
                            Inscripciones
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link " 
                            to="/sponsors"
                        >
                            Sponsors
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/contacto"
                        >
                            Contacto
                        </NavLink>

                        <NavLink 
                            className="nav-item nav-link" 
                            to="/aloja"
                        >
                            Alojamiento y mas
                        </NavLink>

                        
                    </div>
                </div>
            </div>
        </nav>
    )
}