import "./style.css";
import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'


const Form = ({ citas, setCitas }) => {

  //creacion de State de citas 
  const [cita, actualizarCita] = useState({
    mascota: "",
    especie: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, actualizarError] = useState(false);


  //funcion que se ejcuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  };

  //extraigo los valores 
  let { mascota, especie, dueño, fecha, hora, sintomas } = cita;

  //cuando el usuario presiona el boton
  const SubmitCita = e => {
    e.preventDefault();

    //validar el formulario
    if (mascota.trim() === '' || especie.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }

    //elimino el mensaje previo
    actualizarError(false);

    //asigno un ID a la cita
    cita.id = uuidv4();


    //Guardas cita en citas
    setCitas([
      ...citas,
      cita
    ])

    actualizarCita({
      mascota: "",
      especie: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: ""
    })

    Swal.fire(
      'Turno agendado!',
      'Los esperamos',
      'success'
    )

  }

  return (

    <Fragment>

      <form onSubmit={SubmitCita}>
        {error ? <p className="error">Completar todos los campos</p> : null}

        <h3>Solicita tu turno</h3>

        <div>
          <div className="form-floating">
            <input type="text"
              name="mascota"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre de la mascota"
              autocomplete="off"
              onChange={actualizarState}
              value={mascota} />
            <label htmlFor="floatingInput">Nombre de la mascota</label>
          </div>

          <div className="form-floating">
            <input type="text"
              name="especie"
              className="form-control"
              id="floatingPassword"
              placeholder="Tipo de especie de la mascota"
              autocomplete="off"
              onChange={actualizarState}
              value={especie} />
            <label htmlFor="floatingPassword">Especie</label>
          </div>

          <div className="form-floating">
            <input type="text"
              name="dueño"
              className="form-control"
              id="floatingPassword"
              placeholder="Nombre del dueño"
              autocomplete="off"
              onChange={actualizarState}
              value={dueño} />
            <label htmlFor="floatingPassword">Nombre del dueño</label>
          </div>

          <div className="form-floating">
            <input type="date"
              name="fecha"
              className="form-control"
              id="floatingPassword"
              onChange={actualizarState}
              value={fecha} />
            <label htmlFor="floatingPassword">Fecha</label>
          </div>

          <div className="form-floating">
            <input type="time"
              name="hora"
              className="form-control"
              id="floatingPassword"
              onChange={actualizarState}
              value={hora} />
            <label htmlFor="floatingPassword">Horario del turno</label>
          </div>

          <div className="form-floating">
            <input type="text"
              name="sintomas"
              className="form-control"
              id="floatingInput"
              placeholder="Sintomas"
              autocomplete="off"
              onChange={actualizarState}
              value={sintomas} />
            <label htmlFor="floatingInput">Motivos de la consulta</label>
          </div>

          <button type="submit" className="btn btn-secondary" onChange={actualizarState}>Agendar</button>
        </div>

      </form>
    </Fragment>
  );
};

export default Form;
