import { useState } from "react";
import "./App.css";

function App() {

  const [conselho, setConselho] = useState()

  const gerarConselho = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip.advice)
      setConselho(data.slip.advice)
    })
  }

  return (
    <main class="glass-card">
      <h1>💡 Conselho do Dia</h1>
      <p id="advice">
        Clique no botão abaixo para receber um conselho aleatório!
      </p>
      <p>{conselho}</p>
      <button onClick={gerarConselho} id="conselho">Gerar Conselho</button>
    </main>
  )
}

export default App;
