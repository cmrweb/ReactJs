import React, { Component } from 'react';
import Tableau from './array';
import './modal.css';
class Modal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    openModal(e){
        const modal = document.getElementById("modal");
        const modalBtn = document.getElementById("modalBtn");
        if(!this.state.isOpen){
            modal.style.display = "block";
            modalBtn.style.display = "none";
            this.setState({isOpen:true});
        }else{
            modal.style.display = "none"
            modalBtn.style.display = "block";
            this.setState({isOpen:false});
        }

    }
    render() {
        return (
            <div className="d-block">
                <button id="modalBtn" className="btn btn-primary d-block mx-auto" onClick={this.openModal.bind(this)}>Ajouter un contact</button>
                <div id="modal" className="myModal modal text-dark" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Liste de contact</h5>
                                <button onClick={this.openModal.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               <Tableau />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;