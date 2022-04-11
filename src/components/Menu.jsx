import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/Gatitos">Gatitos</Link>
      </li>
    </ul>
    //preguntar porque anda sin props, y con props no anda(en el ej del prof no anda sino)
    /* {this.props.children}; */
  );
}

export default Menu;
