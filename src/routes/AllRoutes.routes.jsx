import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";

import { FormReserva } from "../components/FormReserva.jsx";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route element={<Login/>} path="/login" />
            <Route element={<FormReserva/>} path='/reserva'/>
        </Routes>
    );
}

export default AllRoutes;
