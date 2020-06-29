import React, { Component } from 'react';
import BuscadorV from './vista/BuscadorV';
import Resultado from './componentes/Resultado';
import Buscador from './componentes/Buscador';

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smoooth', 'end');
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina -= 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
     //console.log(pagina);
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
     //console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    let url =`https://pixabay.com/api/?key=16381292-b0d20bdfb5cbdb270cebec6fa&q=${termino}&per_page=30&page=${pagina}`;

    // console.log();

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))

  }



  render(){
    return(
      <div className = "app container">
        <div className = "jumbotron">
          <p className = "lead text-center">Buscador De Imagenes</p>
          <BuscadorV datosBusqueda = {Buscador.datosBusqueda}/>
        </div>
        <div className= "row justify-content-center">
          <Resultado
            imagenes = {this.state.imagenes}
            paginaAnterior= {this.paginaAnterior}
            paginaSiguiente= {this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }



}

export default App;
