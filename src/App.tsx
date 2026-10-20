import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbizarre");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        <button type="button" onClick={() => setPokemonName("Bulbizarre")}>
          Bulbizarre
        </button>
        <button type="button" onClick={() => setPokemonName("Mew")}>
          Mew
        </button>
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;