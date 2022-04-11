import React from "react";
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import Factura from './Factura';

//Tenemos que crear un componente facturas(parte del menu inicial) que nos de la opción de ver facturas(como un submenu)
function Facturas(){

    const facturas=[
        {id:1, monto:500},
        {id:2, monto:1200},
        {id:3, monto:550},
    ];

    return(
        <ul>
            {facturas.map((factura)=>(
            <li>
                <Link to={`/facturas/${factura.id}?monto=${factura.monto}`}>Factura: {factura.id}</Link>
            {/*   <Link to={"/factura/"+ factura.id}></Link>  -->Otra forma válida de hacerlo*/}
            </li>
            ))}
            <Routes>
            <Route path="/:id" element={<Factura />}></Route>
            </Routes>
            <Outlet />
        </ul>
    )
}

export default Facturas;