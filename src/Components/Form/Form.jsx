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
      'Good job!',
      'Turno añadido',
      'success'
    )

  }

  return (

    <Fragment>


      <form onSubmit={SubmitCita}>
        {error ? <p className="error">Completar todos los campos</p> : null}

        <h3>Crea tu cita</h3>
        <label className="item">Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="item"
          placeholder="Nombre de la mascota"
          autocomplete="off"
          onChange={actualizarState}
          value={mascota}
        />

        <label className="item">Especie</label>
        <input
          type="text"
          name="especie"
          className="item"
          placeholder="Tipo de especie de la mascota"
          autocomplete="off"
          onChange={actualizarState}
          value={especie}
        />

        <label className="item">Nombre dueño</label>
        <input
          type="text"
          name="dueño"
          className="item"
          placeholder="Nombre dueño de la mascota"
          autocomplete="off"
          onChange={actualizarState}
          value={dueño}
        />

        <label className="item">Fecha</label>
        <input type="date" name="fecha" className="item"
          onChange={actualizarState}
          value={fecha}

        />

        <label className="item">Hora</label>
        <input type="time"
          name="hora"
          className="item"
          onChange={actualizarState}
          value={hora}
        />

        <label className="item">Sintomas</label>
        <textarea name="sintomas"
          className="item"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="item button" onChange={actualizarState}>Agregar</button>


      </form>
    </Fragment>
  );
};

export default Form;
