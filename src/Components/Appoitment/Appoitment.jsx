import React from 'react';
import "./style.css"

const Appoitment = ({cita}) => {


    return (  

        <div className="card">
            <p><b>Nombre de la mascota:</b> {cita.mascota}</p>
            <p><b>Especie:</b> {cita.especie}</p>
            <p><b>Nombre del dueño:</b> {cita.dueño}</p>
            <p><b>Fecha del turno:</b> {cita.fecha}</p>
            <p><b>Horario:</b> {cita.hora}</p>
            <p><b>Motivos:</b> {cita.sintomas}</p>
        </div>

    );
}
 
export default Appoitment;