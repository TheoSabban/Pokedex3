interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((PokemonListCheck) => (
        <button
          key={PokemonListCheck.name}
          type="button"
          onClick={() => {
            if (PokemonListCheck.name === "Pikachu") {
              alert("Pika... Pikachu !!!");
            }
            setPokemonName(PokemonListCheck.name);
          }}
        >
          {PokemonListCheck.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;