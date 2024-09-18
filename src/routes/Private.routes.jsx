import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { AuthContext } from "../context/AuthContext.jsx"

const PrivateRoutes = () => {

    const { loading, isAuthenticated } = useContext(AuthContext);

    if(loading) return <Loader/>;
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>

    return <Outlet/>
}

export default PrivateRoutes;
