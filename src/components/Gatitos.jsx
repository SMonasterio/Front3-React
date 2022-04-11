import React from "react";
import {ImagenGatito} from "./ImagenGatito";

class Gatitos extends React.Component {
  componentDidUpdate() {
    if (this.props.cantidadGatitos === 0 || this.props.cantidadGatitos === 10) {
      alert("lorem gatitos");
    }
  }

  render() {
    const arrayGatitos = new Array(this.props.cantidadGatitos)
      .fill(null)
      .map((_, idx) => <ImagenGatito key={idx}/>);

    return <div>Contador de gatitos: {arrayGatitos}</div>;
  }
}

export default Gatitos;
