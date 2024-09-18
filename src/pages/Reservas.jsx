import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Reservas() {
    const [reservas, setReservas] = useState()
    useEffect(()=>{
        const obtenerReservas =async()=>{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/reserva`)
            setReservas(response.data)
        }
        obtenerReservas()
    },[])
  return (
   <section className='bg-blue-gray-50 w-screen h-screen pt-12 px-5'>
    <div className='bg-white rounded-xl mb-10'>
        <h1 className='text-2xl drop-shadow-lg ml-10'> <span className='text-3xl font-semibold '>HI,</span> Jonh Doe</h1>
    </div>
    {reservas && reservas.map((item, index)=>(
        <div key={index} className="bg-white gap-4 w-max h-max pt-10 pb-4 px-5 rounded-lg">
            <div className="flex gap-3 ">
                <label htmlFor="fechaInicio" className="font-semibold text-gray-700">Fecha Inicio:</label>
                <h1 id="fechaInicio" className="text-gray-600">{item.fechaInicio}</h1>
            </div>
            <div className="flex  gap-3">
                <label htmlFor="fechaFin" className="font-semibold text-gray-700">Fecha Fin:</label>
                <h1 id="fechaFin" className="text-gray-600">{item.fechaFin}</h1>
            </div>
            <div className="flex  gap-3">
                <label htmlFor="lugar" className="font-semibold text-gray-700">Lugar:</label>
                <h1 id="lugar" className="text-gray-600">{item.lugar.nombre}</h1>
            </div>
            <div className="flex ">
                <label htmlFor="direccion" className="font-semibold text-gray-700">Dirección:</label>
                <h1 id="direccion" className="text-gray-600">{item.lugar.direccion}</h1>
            </div>
            <div className="flex  gap-3">
                <label htmlFor="usuario" className="font-semibold text-gray-700">Usuario:</label>
                <h1 id="usuario" className="text-gray-600">{item.usuario.nombre}</h1>
            </div>
        </div>
    ))}
   </section>
  )
}
