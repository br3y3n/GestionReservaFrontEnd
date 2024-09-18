import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
export default function CrearLugar() {
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [direccion, setDireccion] = useState();
  const registrarLugar = async () => {
    const response = await axios.post("http://127.0.0.1:3031/lugares/", {
      nombre,
      descripcion,
      direccion,
    });
    console.log(response.data);
    alert(response.data.message);
  };
  return (
    <section className="flex justify-center pt-10 bg-blue-gray-50 h-screen">
      <Card className="px-5 py-8 h-max">
        <Typography variant="h4" color="blue-gray">
          Regiatra un lugar nuevo
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              nombre
            </Typography>
            <Input
              onChange={(e) => setNombre(e.target.value)}
              size="lg"
              placeholder="ingresa un nombre"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              descripcion
            </Typography>
            <Input
              onChange={(e) => setDescripcion(e.target.value)}
              size="lg"
              placeholder="ingresa una descripcion del lugar"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              direccion
            </Typography>
            <Input
              onChange={(e) => setDireccion(e.target.value)}
              size="lg"
              placeholder="CALLE 0 # 00-00"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={() => registrarLugar()}>
            Crear
          </Button>
        </form>
      </Card>
    </section>
  );
}
