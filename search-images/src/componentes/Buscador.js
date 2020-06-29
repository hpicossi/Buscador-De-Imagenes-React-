import React, { Component } from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }
    datosBusqueda = (termino) => {
        //guardo datos en el state
        this.setState({
          termino : termino,
          pagina : 1
        }, () => {
          //mando a ejecutar al appi
          this.consultarApi();
        })
      }
}

export default Buscador;