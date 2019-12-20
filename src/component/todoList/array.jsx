import React,{ Component } from 'react';
import Liste from './liste';
import './array.css';
class Tableau extends Component{
    constructor(){
        super();
        this.state = {
            erreur:"",
            inputNom:"",
            inputPrenom:"",
            users:[]
        }

    }
    getValue(e,target){
        const nom = e.target.value;
        this.setState({
            target:nom
        });
    }
    //input nom onChange=
    getNom(e){
        const nom = e.target.value;
        this.setState({
            inputNom:nom
        });
    }
    getPrenom(e){
        const prenom = e.target.value;
        this.setState({
            inputPrenom:prenom
        });
    }
    addUser(e){
        e.preventDefault();
        if(this.state.inputNom!=="" && this.state.inputPrenom!==""){
            const newUser = [...this.state.users,
                {
                nom: this.state.inputNom,
                prenom: this.state.inputPrenom
                }];
            this.setState({
                erreur:"",
                inputNom:"",
                inputPrenom:"",
                users:newUser
            });
        }else{
            this.setState({
                erreur:"Veuillez remplir les champs"
            });
        }
    }

    render(){
        return(
            <section>
                <form action="#" method="post" className="form-inline flex-column justify-content-center col-md-4 mx-auto">
                    
                    <div className="from-group">
                        <label htmlFor="nom">Nom</label>
                       <input onChange={this.getNom.bind(this)} value={this.state.inputNom} className="from-control text-center nom secureName" type="text" autoComplete="off"/> 
                    </div>
                    <div className="from-group">
                        <label htmlFor="prenon">Prenom</label>
                       <input onChange={this.getPrenom.bind(this)} value={this.state.inputPrenom} className="from-control text-center prenom secureName" type="text" autoComplete="off"/> 
                    </div>
                    <small className="text-danger">{this.state.erreur}</small>
                    <button onClick={this.addUser.bind(this)} className="btn btn-primary btn-sm m-2">Ajouter</button>
                    
                </form>
                <Liste user={this.state.users}/>
            </section>
        );
    }
}
export default Tableau;