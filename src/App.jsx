import { useState } from "react";
import "./App.css";
import { Rocket } from "./components/Rocket";

function App() {
  const [altura, setAltura] = useState("100");
  return (
    <>
      <div className="inputChange">
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target);
            setAltura(e.target.value);
          }}
          style={{ zIndex: 10 }}
        />
        <h4>Porcentaje actual</h4>
      </div>
      <Rocket altura={`${altura}`} />
    </>
  );
}

export default App;
