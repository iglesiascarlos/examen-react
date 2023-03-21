import { Link } from "react-router-dom";
import Carrousel from "./components/Carrousel"

export default function App(props) {

  return (
    <div className="App">
      <h1>Examen 2ª Evaluación React</h1>
      <Link to='/login'>
        <button>LogIn</button>
      </Link>
      <Carrousel />
    </div>

  )
}
