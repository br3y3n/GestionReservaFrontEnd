import React, { useEffect, useState } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
   List, ListItem,
 } from "@material-tailwind/react";
 import axios from 'axios'
export const FormReserva = () => {
 const [fechas, setFechas]= useState()
 const [lugares ,setLugares]= useState([])
 const [lugar, setLugar]= useState()
 const [fechaInicio, setFechaInicio]=useState()
 const [fechaFinal, setFechaFinal] = useState()
 const [idUsuario, setIdUsuario] = useState('66e9b0f7286af971576f3c06')
console.log(lugar);
 const handleSumit =async()=>{
   const response= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/reserva`,{
      fechaInicio:fechaInicio,
      fechaFin:fechaFinal,
      lugar:lugar,
      usuario:idUsuario
   })
   console.log(response);
 }
 useEffect(()=>{
   const lug=async()=>{
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/lugares`)
      console.log(response.data.lugares);
      setLugares(response.data.lugares)
   }
lug()
 },[])
 useEffect(()=>{
   const fechaHoy=()=>{
      const fecha = new Date();
    const formato =fecha.toISOString().split('T')[0]; 
    setFechas(formato)
      
}
fechaHoy()
 },[])
  
  return (
    <div className='flex flex-col items-center justify-center'>
 <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
  Reserva lugares
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSumit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
     Fecha de inicio
          </Typography>
          <Input
          required
            size="lg"
            placeholder="name@mail.com"
            type='date'
            min={fechas}
            value={fechaInicio}
            onChange={(e)=>setFechaInicio(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
     Fecha de fin
          </Typography>
          <Input
             required
            size="lg"
            placeholder="name@mail.com"
            type='datetime-local'
            value={fechaFinal}
            onChange={(e)=>setFechaFinal(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Lugar
          </Typography>
          <select name=""  id=""value={lugar} onChange={(e)=>setLugar(e.target.value)}>
            <option>selecciona el lugar</option>
        {lugares&&lugares.map((lugar)=>(
         <>
       <option  value={lugar._id} >{lugar.nombre}</option>
      </>

))}
</select>
 
          
        </div>
     
        <Button type='submit' className="mt-6" fullWidth>
        Guardar
        </Button>
       
      </form>
    </Card>
    </div>
  )
}
