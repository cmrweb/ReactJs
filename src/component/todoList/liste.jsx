import React,{ Component }  from 'react';

export default class Liste extends Component {
    constructor(){
        super();
    }
    deleteUser = (id)=>{
        const newUsers = this.props.user;
        newUsers.splice(id,1);
        this.setState({
            users:newUsers
        });
    }
    render(){
        return(this.props.user.map((val,id)=>{
            return(
                <div key={id} className="card d-flex flex-row justify-content-end">
                    <p className="p-2 col-md-12 text-center">{val.nom.toUpperCase()} {val.prenom}</p>
                    <button onClick={()=>this.deleteUser(id)} className="btn btn-danger"> X </button>
                </div>
            );
        })
        );
    }

}
