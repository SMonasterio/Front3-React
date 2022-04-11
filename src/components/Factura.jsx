import React from "react";
import {useParams} from 'react-router-dom';

function Factura(){

    const {id}= useParams();

    return(
        <p>
            Factura n°: {id}
{/*             Monto: $ {factura.monto} */}
        </p>
    );
}

export default Factura;