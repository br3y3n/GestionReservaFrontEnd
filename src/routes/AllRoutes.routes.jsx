import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Reservas from "../pages/Reservas.jsx";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route element={<Login/>} path="/login" />
            <Route  path="/reservas" element={<Reservas/>}/>
        </Routes>
    );
}

export default AllRoutes;
