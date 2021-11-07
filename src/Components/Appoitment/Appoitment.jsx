import React, {Fragment} from 'react';

const Appoitment = ({cita}) => {


    return (  

      <Fragment>
        <h3>Turnos</h3>
        <div className="card" style={{width: '15rem'}, {margin:'8px'}}>
        <div className="card-header">
          Turno asignado
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nombre de la mascota: {cita.mascota}</li>
          <li className="list-group-item">Especie: {cita.especie}</li>
          <li className="list-group-item">Nombre del dueño: {cita.dueño}</li>
          <li className="list-group-item">Fecha del turno: {cita.fecha}</li>
          <li className="list-group-item">Horario: {cita.hora}</li>
          <li className="list-group-item">Motivos: {cita.sintomas}</li>
        </ul>
      </div>
      </Fragment>

    );
}
 
export default Appoitment;