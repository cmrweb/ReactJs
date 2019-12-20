import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Exo1 from './component/exo/exo1';
import Exo2 from './component/exo/exo2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exo2bis from './component/exo/exo2bis';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Exo1 />, document.getElementById('exo'));
ReactDOM.render(
    <div className="d-flex justify-content-around p-4 col-md-6 mx-auto">
        <Exo2/>
        <Exo2bis/>
    </div>
, document.getElementById('exo2'));
serviceWorker.unregister();
