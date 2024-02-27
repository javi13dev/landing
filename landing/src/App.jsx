import { useState } from 'react'
import gameLogo from '/pantalla_inicio.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={gameLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Godzzler</h1>
      <div className="card">


      </div>
      <p className="read-the-docs">
        Click en el logo para descargar el juego
      </p>
    </>
  )
}

export default App
