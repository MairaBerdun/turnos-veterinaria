import React, { Fragment, useState } from "react";
import Form from "./Components/Form/Form";
import "./index.css";
import Appoitment from "./Components/Appoitment/Appoitment";

function App() {

  const [citas, setCitas] = useState([])

  return (
    <Fragment>

      <img src="https://estaticos.qdq.com/swdata/home_photos/199/199764721/be1953f6d59e46b488b007448452da01.jpg" className="img-fluid" alt="..." />

      <div className="container">
        <div className="patientInformation">
          <Form
            citas={citas}
            setCitas={setCitas}
          />
        </div>

        <div className="appoitment">
          {citas.map(cita => <Appoitment key={cita.id} cita={cita} />)}
        </div>


      </div>
    </Fragment>
  );
}

export default App;
