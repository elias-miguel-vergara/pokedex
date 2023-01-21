import React from "react";
import Header from "../components/header";
import Seeker from "../components/seeker";
import Pantalla from "../components/pantalla";
import Footer from "../components/footer";
import "../sass/Pokedex.scss"

const Pokedex = () => (
    <div className="Pokedex">
        <Header />
        <Seeker />
        <Pantalla />
        <Footer />
    </div>
);

export default Pokedex
