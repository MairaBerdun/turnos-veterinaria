import React, { Fragment, useState } from "react";
import Form from "./Components/Form/Form";
import "./index.css";
import Appoitment from "./Components/Appoitment/Appoitment";

function App() {

  const [citas, setCitas] = useState([])

  return (
    <Fragment>
      <h1>🐶Veterinaria Puppies🐱</h1>
  
      <div className="container">
        <div className="patientInformation">
          <Form 
            citas={citas}
            setCitas={setCitas}
          />
        </div>

        <div className="appoitment">
        <h3>Turnos</h3>
          {citas.map( cita => <Appoitment key={cita.id} cita={cita}/> )}
        </div>
          
          
      </div>
    </Fragment>
  );
}

export default App;
