import React, { Component } from 'react';

class Buscador extends Component{

  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    console.log(this.busquedaRef.current.value)
  }

  render() {
    return (
      <form onSubmit= {this.obtenerDatos}>
        <div className="row">
          <div className= "form-group col-md-8">
            <input ref={this.busquedaRef}
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca Tu Imagen. Ejemplo: Futbol" />
          </div>
          <div className= "form-group col-md-4">
            <input type="submit"
            className="btn btn-lg btn-danger btn-block" value = "Buscar..."/>
          </div>

        </div>
      </form>
    );
  }
}




class BuscadorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}




//export default Buscador;
export default BuscadorForm;
