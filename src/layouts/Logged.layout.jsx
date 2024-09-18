import { useContext } from "react";
import { Link } from "react-router-dom"

import { AuthContext } from "../context/AuthContext.jsx"

const LoggedLayout = ({ children }) => {

    const menuItems = [
        { title: "Reservas", path: "/reservas" },
        { title: "Mis Reservas", path: "/mis-reservas" },
        { title: "Lugares", path: "/crearlugar" },
    ]

    const { user } = useContext(AuthContext);

    return (
        <div className='w-screen h-screen bg-[#f2f2f2] flex'>
        
            <aside className='bg-dark w-[20vw] h-full p-5 text-white'>
                <h6 className="text-center font-bold text-2xl mb-3">ReserYa</h6>
                {
                    user.tipoUsuario !== "Administrador" ? (
                        <ul>
                            <li>
                                <Link to="/reservas">
                                    Reservas
                                </Link>
                            </li>
                            <li>
                                <Link to="/crearlugar">
                                    Crear Lugar
                                </Link>
                            </li>

                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/reservas">
                                    Reservas
                                </Link>
                            </li>
                            <li>
                                <Link to="mis-reservas">
                                    Mis Reservas
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </aside>
            <main className='w-[100vw] p-5 overflow-y-scroll'>
                { children }
            </main>

        </div>
    );
}

export default LoggedLayout;
