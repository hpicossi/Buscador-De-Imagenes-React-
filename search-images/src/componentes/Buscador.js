import React, { Component } from 'react';

class Buscador extends Component{

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    let url =`https://pixabay.com/api/?key=16381292-b0d20bdfb5cbdb270cebec6fa&q=${termino}&per_page=30&page=${pagina}`;

    // console.log();

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))

  }

  busquedaRef = React.createRef();

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

  obtenerDatos = (e) => {
    e.preventDefault();
    //Tomamos el valor del input
    const termino = this.busquedaRef.current.value;
    //Lo enviamos al componente principal
    this.props.datosBusqueda(termino);
  }

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.busquedaRef}
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



export default Buscador;
