import React, { Component } from 'react';

import axios from "axios";

class Buscador extends Component{

  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    console.log(this.busquedaRef.current.value)
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




class BuscadorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', data:''};

    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleClick() {
    console.log("me ejecute ", this.state);
    console.log("me ejecute ", this.state.value);


    const appid = "16379604-fe59dd015569cb8b32af3ce1f";
    const url =
      "https://pixabay.com/api/?key=" + appid + "&?q=" +
      this.state.value + "&image_type=photo";

    axios.get(url).then(res => {
      this.setState({
        data: res.data
      });
    })
    .catch(function (error) {
      alert(error);
    });
    console.log("url ", url);
    console.log("hola ", this.state.data);
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
    <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}
          onClick={() => this.handleClick()}
           />
        </label>
        <input type="submit" value="submit" />
      </form>
      <div>
          {this.state.data && (
            <div>
              <p>datos</p>
              <ul>
                {Object.keys(this.state.data.hits).map((data, hits) => (
                  <li key={hits}>{this.state.data[hits]}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
       </div>
    );
  }
}




//export default Buscador;
export default BuscadorForm;
