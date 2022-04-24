import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import transvelasco_2 from '../../assets/logo/transvelasco_2.png'


export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">

            <Container>

                <Navbar.Brand href="/">
                    <img 

                        style={{
                            width: 180,
                        }}
                        src={transvelasco_2}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-control="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="/sobre"> Sobre nosotros </Nav.Link>
                        <Nav.Link href="/categorias"> Categorias </Nav.Link>
                        <Nav.Link href="/inscripciones"> Inscripciones </Nav.Link>    
                        <Nav.Link href="/sponsors"> Sponsors </Nav.Link>
                        <Nav.Link href="/contacto"> Contacto </Nav.Link>
                        <Nav.Link href="/aloja"> Alojamiento y mas </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             </Container>
            </Navbar>
        </>
    )
}