"use client"

import { useState } from "react"

export default function Toggle(){
    const [ligado, setLigado] = useState<boolean>(false);
    const [mostrar, setmostrar] = useState<boolean>(false);
    const [presenca, setpresente] = useState<boolean>(false);
    return(
    <>
    <button onClick={() => setLigado(!ligado)}>
        {ligado ? "Ligado" : "Desligado"}
    </button>
    
    <button onClick={() => setmostrar(!mostrar)}>
        {mostrar ? "Mostrar" : "Esconder"}
    </button>

    <button onClick={() => setpresente(!presenca)}>
        {presenca ? "Presente" : "Ausente"}
    </button>
    </>
    )
}