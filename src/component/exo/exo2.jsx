import React from 'react'
import { useState } from 'react'

export default function Exo2() {
    const [background, setBackground] = useState("white");
    return (
        <div className="App">
            <h2>Exercice 2 Function</h2>
            <input 
            type="text" 
            onChange={(e)=>setBackground(document.querySelector('body').style.background = e.target.value)}
            className="text-center form-control"
            placeholder="Entrez une couleur"/>         
        </div>
    )
    
}
