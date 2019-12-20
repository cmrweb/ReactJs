import React from 'react';
//j'importe la Class Component de React
import { Component } from 'react';

// je creer mon composant qui est enfant de la class Component de React
class ClassClassic extends Component{
    //la method render() return au moin UN element HTML
    render(){
        //je peu declarer un constante dans ma method render()
        const nom = "camara";
        const prenom = "enrique";
        return(
            <div>
            <p>Bonjour {nom} {prenom}</p>
            </div>
        );
    }
}

export default ClassClassic;