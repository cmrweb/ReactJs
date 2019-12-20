import React from 'react';
// je recupere mes props en parametre de ma fonction
function FnProps(props) {
    return(
        // j'interpole ma variable
        //je l'affiche
        <p>Bonjour {props.nom}  {props.prenom}</p>
    );
}
export default FnProps;