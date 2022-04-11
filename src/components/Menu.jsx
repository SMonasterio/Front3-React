import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul> 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
      <li>
        <Link to="/Gatitos">Gatitos</Link>
      </li>
    </ul>
    //preguntar porque anda sin props, y con props no anda(en el ej del prof no anda sino)
    /* {this.props.children}; */
  );
}

export default Menu;
