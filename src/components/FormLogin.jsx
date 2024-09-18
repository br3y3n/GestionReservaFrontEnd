import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify"

import { login } from '../services/auth.services.js';
import Loader from './Loader.jsx';

const FormLogin = () => {

    document.title = "¡Iniciar sesión!";
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [loading, setLoading] = useState(false);

    // login function event
    const handleLogin = async() => {    
        setLoading(true);
        const credentials = {
            email,
            password
        }

        try {

            const loginResponse = await login(credentials);

            if(loginResponse.status == 404) return toast.error("Usuario no encontrado.")
            if(loginResponse.status == 400) return toast.error("Credenciales incorrectas.")
            setLoading(false);
            return navigate("/");
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    

    return (
        <Card className='p-6' color="white" shadow={false}>
            <ToastContainer/>
            { loading && <Loader/> }
            <Typography variant="h4" color="blue-gray">
                ¡Inicar Sesión!
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Te estabamos esperando.
            </Typography>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Correo Elétronico *
                    </Typography>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Contraseña *
                    </Typography>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                
                <Button type='submit' className="mt-6" fullWidth>Iniciar Sesión</Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register" className="font-medium text-gray-900">
                        Registro
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default FormLogin;
