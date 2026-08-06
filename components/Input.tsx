"use client"

import { useState } from "react";

export default function Input(){
    const [texto, setTexto] = useState<string>("");
   
    return(
    <>
    <input 
    value={texto}
    onChange={(e: React.ChangeEvent<HTMLInputElement> ) =>
    setTexto(e.target.value)}
    />
    <p>Digite: {texto}</p>
    
    <div >
    <input
      value={texto}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)} />
    <p >{texto.length} caractere(s)</p>
  </div>
    
    </>
    )
};