import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Exo1 from './component/exo/exo1';
import Exo2 from './component/exo/exo2';
import Exo2bis from './component/exo/exo2bis';
import Modal from './component/todoList/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<div>
    <Modal />
    <App />
    
</div>, document.getElementById('root'));
ReactDOM.render(<Exo1 />, document.getElementById('exo'));
ReactDOM.render(
    <div className="d-flex flex-column flex-md-row justify-content-around p-4 col-md-6 mx-auto">
        
        <Exo2/>
        <Exo2bis/>
    </div>
, document.getElementById('exo2'));
serviceWorker.unregister();
