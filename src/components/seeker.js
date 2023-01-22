import React from "react";
import '../sass/Seeker.scss'

function Seeker({ filtro }) {

    const handleOnchange = (e) => {
        filtro(e.target.value)
    }

    return (
        <div className="container_buscador">
            <input type='text' placeholder="Buscar un Pokemon" onChange={(e)=>handleOnchange(e)} />
            <button></button> 
        </div>
    )
}

export default Seeker