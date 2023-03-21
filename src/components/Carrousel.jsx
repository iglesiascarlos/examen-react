import { useEffect, useState } from "react"
import petiacionAPI from "../services/petiacionAPI"

export default function Gif(){
    
    const [gifs, updateGifs] = useState([])
    const [indice, setIndice] = useState(0);

    const avanzar = () => {
      if (indice < gifs.length - 1) {
        setIndice(indice + 1);
      }
    };
  
    const retroceder = () => {
      if (indice > 0) {
        setIndice(indice - 1);
      }
    };

    useEffect(function () {
      petiacionAPI({keyword : "marvel"}, {limit : 16}).then(gifs => updateGifs(gifs))
    }, [])

    return(
        <div>
            <button onClick={retroceder} disabled={indice === 0}>
                Anterior
            </button>
            <img src={gifs[indice]} alt="imagen" />
            <button onClick={avanzar} disabled={indice === gifs.length - 1}>
                Siguiente
            </button>
        </div>
    )
}