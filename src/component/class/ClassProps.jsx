import React, { Component } from 'react';

class ClassProps extends Component{
    render(){
        return(
            <div>
                {/* pour recuperer la valeur des props dans une class on utilise this.props."ma propriete" */}
                <p>Bonjour {this.props.nom} {this.props.prenom}</p>
            </div>
        );
    }
}

export default ClassProps;