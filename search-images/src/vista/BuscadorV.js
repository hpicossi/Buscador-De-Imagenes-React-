import React, { Component } from 'react';
import Buscador from '../componentes/Buscador';
 
class BuscadorV extends Component{
  render() {
    
    return (
      
      <form onSubmit={Buscador.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={Buscador.busquedaRef}
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca Tu Imagen. Ejemplo: Futbol" />
          </div>
          <div className="form-group col-md-4">
            <input type="submit"
            className="btn btn-lg btn-danger btn-block" value= "Buscar..."/>
          </div>

        </div>
      </form>
    );
  }
}



export default BuscadorV;
