import React, { useEffect, useState } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
   List, ListItem,
 } from "@material-tailwind/react";
export const FormReserva = () => {
 const [fechas, setFechas]= useState()
 const [lugares ,setLugares]= useState()
 useEffect(()=>{
const response = 
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
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
     Fecha de inicio
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            type='date'
            min={fechas}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
     Fecha de fin
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            type='date'
            min={fechas}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Lugar
          </Typography>
         <select name="" id="">
        
         <option value=""> F</option>
 
      </select>
          
        </div>
     
        <Button className="mt-6" fullWidth>
        Guardar
        </Button>
       
      </form>
    </Card>
    </div>
  )
}
