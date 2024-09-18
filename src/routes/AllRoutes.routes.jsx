import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route element={<Login/>} path="/login" />
        </Routes>
    );
}

export default AllRoutes;
