//importer react
import React from 'react';

//declare ma fonction avec une majuscule pour creer mon composant
function FnClassic(){
    const title = "ceci est une variable";
    //return UNE seul balise HTML
    return(
        <div>
            {/* j'affiche du texte */}
            <p>je suis un composant fonctionnel</p>
            {/* j'affiche une variable entre accolade*/}
            <p>{title} - ceci est du texte</p>
        </div>
    );
}

//j'exporte mon composant avec le nom de ma fonction
export default FnClassic;