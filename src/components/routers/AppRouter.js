import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from '../screens/HomeScreen';

import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
   return (
        <BrowserRouter>
            <Routes> 
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/*" element={<DashboardRoutes/>}/>

                {/* <Route path="/*" element={<DashboardRoutes/>} /> */}
            </Routes>
        </BrowserRouter>
    )
};