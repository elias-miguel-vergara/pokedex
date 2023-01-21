import React from "react";
import "../sass/pantalla.scss"

const Pantalla = () => (
        <div className="Pantalla">
            <div className="image-pokemon">
                <img src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" alt="pokemon"/>
            </div>
            <div className="caractertisticas">
                <div className="caracteristica_pokemon">
                    <p>Habilidad</p>
                    <p>70</p>
                </div>
                <div className="caracteristica_pokemon">
                    <p>Ataque</p>
                    <p>67</p>
                </div>
                <div className="caracteristica_pokemon">
                    <p>Defensa</p>
                    <p>73</p>
                </div>
                <div className="caracteristica_pokemon">
                    <p>Velocidad</p>
                    <p>30</p>
                </div>
            </div>
        </div>
)

export default Pantalla