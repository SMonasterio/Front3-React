import React from "react";
import Gatitos from './Gatitos';

class Contador extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  modificarGatitos = (valor) => {
    this.setState({ contador: this.state.contador + valor });
  };


  render() {
    
    return (
      <div>
        <Gatitos  cantidadGatitos={this.state.contador}/>
        <button
          disabled={this.state.contador === 10}
          onClick={() => this.modificarGatitos(1)}
        >Crecer</button>
        <button
          disabled={this.state.contador === 0}
          onClick={() => this.modificarGatitos(-1)}
        >Decrecer</button>
      </div>
    );
  }
}

export default Contador;
