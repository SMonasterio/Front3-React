import React from "react";
import axios from "axios";


const GATITOS_API="https://api.thecatapi.com/v1/images/search";

export class ImagenGatito extends React.Component {
    constructor(){
        super();
        this.state={
            imagen:" ",
            imagenPorDefecto:"https://cdn2.thecatapi.com/images/cvf.jpg",
            cargando: true
        }
    }
    
    componentDidMount() {
        this.cargarImagenFetch();
    }
    
    cargarImagen(){
        axios
            .get(GATITOS_API, {
                data: {
                    api_key: "72f39ab9-964b-48e1-a9f8-af594d26df7d",
                },
            })
            .then(({data}) => {
                this.setState({
                    imagen: data[0].url,
                    cargando: false
                });
            })
            .catch((error)=> {
                alert("no se pudo cargar")
            })
            .finally(()=>{
                this.setState({cargando:false}) 
            })
    }

    cargarImagenFetch() {
        fetch(GATITOS_API)
            .then((response)=>response.json())
            .then(([gatito]) => {
                this.setState({
                    imagen: gatito.url,
                    cargando: false
                });
            })
            .catch((error)=> {
                alert("no se pudo cargar")
            })
            .finally(()=>{
                this.setState({cargando:false}) 
            })
    }

    render() {
        return (
            <>
            {this.state.cargando ? (
                <div>...</div>
            ):(<img
                alt="gatito"
                src={this.state.imagen || this.state.imagenPorDefecto}  
                style={
                    {maxWidth:"100px"}
                }
            />)}
            </>
        );
    }
}