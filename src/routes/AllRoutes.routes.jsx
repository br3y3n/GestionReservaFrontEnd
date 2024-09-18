import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";

import Login from "../pages/Login.jsx";
import Reservas from "../pages/Reservas.jsx";
import CrearLugar from "../pages/CrearLugar.jsx";
import Register from "../pages/Register.jsx";
import Test from "../pages/Test.jsx";


import { FormReserva } from "../components/FormReserva.jsx";
const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<Login/>} path="/login" />
            <Route element={<Register/>} path="/register" />

            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route  path="/crearlugar" element={<CrearLugar/>}/>
                <Route  path="/reservas" element={<Reservas/>}/>
                <Route path="/" element={<Navigate to="/reservas"/>}/>
                <Route element={<FormReserva/>} path='/crear-reserva'/>
            </Route>
        </Routes>
    );
}

export default AllRoutes;
