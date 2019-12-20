import React, { Component } from 'react'

export default class Exo2bis extends Component {
    setBackground(e){
        const body = document.querySelector("body");
        body.style.background = e.target.value;
    }
    render() {
        return (
            <div className="App">
                <h2>Exercice 2 Class</h2>
                <input 
                type="text"
                onChange={this.setBackground.bind(this)}
                className="text-center form-control"
                placeholder="Entrez une couleur"/>
            </div>
        )
    }
}
