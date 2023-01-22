import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Seeker from "../components/seeker";
import Footer from "../components/footer";
import "../sass/Pokedex.scss"

function Pokedex (){

    const [pokemon, setpokemon] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(()=>{
        async function CallApi() {
            const urlApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
            console.log(urlApi)
            const Json = await urlApi.json() 
            setpokemon(Json)
        }
        CallApi()
    }, [filter])

    function Userfilter(busqueda) {
        setFilter(busqueda)
    }
    
    return (
        <div className="Pokedex">
            <Header />
            <Seeker filtro={Userfilter} />
            <div className="Pantalla">
                <div className="image-pokemon">
                    <img src={ '' /* pokemon.sprites.front_default */} alt='pokemon' />
                </div>
                <div className="caractertisticas">
                    <div className="caracteristica_pokemon">
                        <p>Nombre: </p>
                        <p>{pokemon.name}</p>
                    </div>
                    <div className="caracteristica_pokemon">
                        <p>Habilidad: </p>
                        <p>{/* pokemon.abilities[1].ability.name */}</p>
                    </div>
                    <div className="caracteristica_pokemon">
                        <p>Ataque: </p>
                        <p>{/* pokemon.stats[1].base_stat */}</p>
                    </div>
                    <div className="caracteristica_pokemon">
                        <p>Defensa: </p>
                        <p>{/* pokemon.stats[2].base_stat */}</p>
                    </div>
                    <div className="caracteristica_pokemon">
                        <p>Base experiencia: </p>
                        <p>{/* pokemon.base_experience */}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Pokedex
