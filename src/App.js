import React from 'react';
import './App.css';
//j'importe mes composants (fonctionnel)
import FnClassic from './component/function/fnClassic';
import FnProps from './component/function/fnProps';
import FnHooks from './component/function/fnHooks';

//importe mes composants de class
import ClassClassic from './component/class/ClassClassic';
import ClassProps from './component/class/ClassProps';
import ClassState from './component/class/ClassState';


function App() {
  return (
    <div className="App p-4 bg-dark text-light mt-4 d-flex justify-content-around col-md-10 mx-auto">
      <section>
        <h1>Composant Fonctionnel</h1>

        <h2>Classic</h2>
        <FnClassic />

        <h2>Props</h2>
        {/* je passe des attribut HTML pour les recuperer en tant que props dans mon composant */}
        <FnProps nom="camara" prenom="enrique"/>

        <h2>Hooks</h2>
        <FnHooks />
      </section>

      <section>
        <h1>Composant de Class</h1>
        <h2>Classic</h2>
        <ClassClassic/>

        <h2>Props</h2>
        <ClassProps nom="camara" prenom="enrique"/>

        <h2>State</h2>
        <ClassState/>
      </section>
    </div>
  );
}

export default App;
