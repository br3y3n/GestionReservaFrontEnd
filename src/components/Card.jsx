import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Card({idUser}) {

    const [reservaUser, setReservaUser] = useState();

    useEffect(()=>{
        const obtenerReservasUsuario =async()=>{
            if(idUser){
                const response = await axios.get(`http://127.0.0.1:3031/reserva/usuario/${idUser}`)
                setReservaUser(response.data.reserva)
            }
        }

        obtenerReservasUsuario()
    },[])
  return (
  <section>
    {reservaUser && reservaUser.map((item, index)=>(
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
