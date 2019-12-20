import React, { Component } from 'react'
export default class Exo1 extends Component {
    constructor() {
        super();
        this.state = {
            color: ["secondary", false],
            color2: ["secondary", false],
            color3: ["secondary", false],
            color4: ["secondary", false]
        };
    }
    changeColor(newColor, target) {
        switch (target) {
            case "bleu":
                !this.state.color[1] ?
                    this.setState({ color: [newColor, true] }) :
                    this.setState({ color: ["secondary", false] })
                break;
            case "rouge":
                !this.state.color2[1] ?
                    this.setState({ color2: [newColor, true] }) :
                    this.setState({ color2: ["secondary", false] })
                break;

            case "jaune":
                !this.state.color3[1] ?
                    this.setState({ color3: [newColor, true] }) :
                    this.setState({ color3: ["secondary", false] })
                break;
            case "vert":
                !this.state.color4[1] ?
                    this.setState({ color4: [newColor, true] }) :
                    this.setState({ color4: ["secondary", false] })
                break;
            case "reset":
                this.setState({
                    color: ["secondary", false],
                    color2: ["secondary", false],
                    color3: ["secondary", false],
                    color4: ["secondary", false]
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="App">
                <h2>Exercice 1</h2>
                <div>
                    <button
                        className={"btn btn-" + this.state.color[0]}
                        onClick={() => this.changeColor("primary", 'bleu')}
                    >primary</button>

                    <button
                        className={"btn btn-" + this.state.color2[0]}
                        onClick={() => this.changeColor("danger", 'rouge')}
                    >danger</button>

                    <button
                        className={"btn btn-" + this.state.color3[0]}
                        onClick={() => this.changeColor("warning", 'jaune')}>warning</button>

                    <button
                        className={"btn btn-" + this.state.color4[0]}
                        onClick={() => this.changeColor("success", 'vert')}>success</button>

                    <button
                        className={"btn btn-secondary"}
                        onClick={() => this.changeColor("secondary", 'reset')}>reset</button>
                </div>

            </div>
        );
    }
}


