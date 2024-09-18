import FormLogin from "../components/FormLogin.jsx";

const Login = () => {
    return (
        <div className="h-screen w-screen bg-auth-bg bg-cover bg-no-repeat flex justify-center items-center">
            <div>
                <FormLogin/>
            </div>
        </div>
    );
}

export default Login;
