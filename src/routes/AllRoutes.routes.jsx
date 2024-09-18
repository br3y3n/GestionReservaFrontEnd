import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Test from "../pages/Test.jsx";



const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<Login/>} path="/login" />
            <Route element={<Register/>} path="/register" />

            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Test/>}/>
            </Route>
        </Routes>
    );
}

export default AllRoutes;
