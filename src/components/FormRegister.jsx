import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';

import Loader from './Loader.jsx';

import { register } from '../services/auth.services.js';


const FormRegister = () => {

    const navigate = useNavigate();
    document.title = "Registrarme";

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [nombre, setNombre] = useState(null);

    const [loading, setLoading] = useState(false);


    const handleLogin = async() => {

        const data = { nombre, email, password }
        try {
            
            const registerResponse = await register(data);


            if(registerResponse.status == 400) return toast.error("El usuario ya existe.");

            setLoading(false);

            return navigate("/login");

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Card className='p-6' color="white" shadow={false}>
            { loading && <Loader/> }
            <ToastContainer/>
            <Typography variant="h4" color="blue-gray">
                ¡Regístrate!
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
                    Nombre Completo *
                </Typography>
                <Input
                    onChange={(e) => setNombre(e.target.value)}
                    size="lg"
                    placeholder="Carlos Lopez"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
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
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="font-medium text-gray-900">
                        Registrarme
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default FormRegister;
