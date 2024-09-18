import { Spinner } from "@material-tailwind/react";

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 bg-dark-gradient backdrop-blur-lg flex justify-center items-center w-screen h-screen z-10 overflow-hidden">
            <Spinner className="h-20 w-20" />
        </div>
    );
}

export default Loader;
