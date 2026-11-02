import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png"
  },

  {
    name: "Dracolosse",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png"
  },

  {
    name: "Dracaufeu",

  },

  {
    name: "Pikachu",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbizarre");

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);


  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;