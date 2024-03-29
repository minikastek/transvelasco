import React from 'react';
import { NavBar } from '../ui/Navbar';
import { Routes, Route } from "react-router-dom";

import { HomeScreen } from '../screens/HomeScreen';
import {SobreScreen} from '../screens/SobreScreen';
import {CarreraScreen} from '../screens/CarreraScreen';
import {ContactoScreen} from '../screens/ContactoScreen';
import {CircuitoScreen} from '../screens/CircuitoScreen';
import {InscripcionesScreen} from '../screens/InscripcionesScreen';
import {CategoriasScreen} from '../screens/CategoriasScreen';
import {AlojamientoGastronomiaScreen} from '../screens/AlojamientoGastronomiaScreen';
import {SponsorsScreen} from '../screens/SponsorsScreen';
import { Footer } from '../ui/Footer';
import { AdminScreen } from '../screens/AdminScreen';


export const DashboardRoutes = () => {
  return (
    <>
        <NavBar />
        <Routes>   
            <Route path="Aloja" element={<AlojamientoGastronomiaScreen/>} />
            <Route path="carrera" element={<CarreraScreen/>} />
            <Route path="circuito" element={<CircuitoScreen/>} />
            <Route path="contacto" element={<ContactoScreen/>} />
            <Route path="inscripciones" element={<InscripcionesScreen/>} />
            <Route path="categorias" element={<CategoriasScreen/>} />
            <Route path="sobre" element={<SobreScreen/>} />
            <Route path="sponsors" element={<SponsorsScreen/>} />
            <Route path="admin" element={<AdminScreen/>}/>

            <Route path="/" element={<HomeScreen/>} />
        </Routes>
        <Footer/>
    </>
  )
};