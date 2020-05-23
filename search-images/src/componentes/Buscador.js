import React, { Component } from 'react';

import axios from "axios";






class BuscadorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', data:''};

    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

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
    console.log(this.state.data.hits);
    const d = JSON.stringify(this.state.data.hits);

    return (
      <div>
    <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"className="form-control form-control-lg"
           value={this.state.value} onChange={this.handleChange}
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
                {Object.keys(this.state.data.hits).map((data, id) => (


                  <li key={id}>
                  <img src={JSON.stringify(this.state.data.hits[id].largeImageURL).replace(/['"]+/g, '')} />


                  </li>
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
