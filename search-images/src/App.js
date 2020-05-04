import React, { Component } from 'react';
import Buscador from './componentes/Buscador';


class App extends Component {
  render(){
    return (
      <div className= "App">
        <div className= "jumbotron">
          <p className= "lead text-center">Buscador De Imagenes</p>

          <Buscador
          mensaje="Buscador..."/>

          </div>
        </div>
    );
  }
}

export default App;
