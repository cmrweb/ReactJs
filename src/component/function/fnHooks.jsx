import React from 'react';
// j'importe useState from react pour utiliser la method useState
import { useState } from 'react';

export default function FnHooks(){
    /* 
        je declare une constante pour stocker
        un tableau avec pour 1er valeur le nom de ma varibale (count)
        et pour 2em valeur la fonction (setCount) qui mettre à jour ma variable 

        Mon tableau est egale à la fonction React useState() qui prend pour parametre 
        la valeur initial "useState(0)" de ma variable
    */
    const [count, setCount] = useState(0);
    return(
        <div>
            {/* j'affiche ma variable count */}
            <p>{count}</p>
            {/* sur le clique je lance une fonction annonyme qui lance ma fonction */}
            <button className="btn btn-primary btn-sm" onClick={ ()=>setCount(count + 1) }> + 1 </button>
        </div>
    );
}
