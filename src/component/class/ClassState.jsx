import React,{ Component } from 'react';
export default class ClassState extends Component{
    constructor(){
        //super() pour creer notre composant en utilisent les parametre du parent
        super();
        /*
            this.state est l'état de mon composant 
            il contient ces propriétés du composant
            qui sont en quel sorte les variables de mon element
        */
        this.state = {
            count:0
        }
    }
    addOne(){
        const val = this.state.count + 1;
        /*
            j'utilise la method setState pour mettre à jour l'etat de mon composant
        */
       this.setState({
           count: val
       })
    }
    render(){
        return(
            <div>
                {/* pour afficher mon state j'utilise this.state."nom de ma proprieté" */}
                <p>{this.state.count}</p>
                <button className="btn btn-primary btn-sm" onClick={()=>this.addOne()}> +1 </button>
            </div>
        );
    }
}