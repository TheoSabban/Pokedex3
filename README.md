# Pokédex en React

Application React qui affiche la carte d'un Pokémon : son image et son nom.

## Contenu des branches

1. `main` : le projet Vite avec React et TypeScript, tel que généré.
2. `components.1` : création du composant `PokemonCard`, qui affiche un Pokémon écrit en dur (image et nom), et appel dans `App`.
3. `components.2` : les données viennent d'un tableau `pokemonList`. Un opérateur affiche l'image si `imgSrc` existe, sinon un paragraphe `???`.
5. `props.1` : le tableau est déplacé dans `App`, qui envoie le Pokémon à `PokemonCard` par la prop `pokemon`.
6. `props.2` : branche finale, qui contient tout le code terminé. Les props de `PokemonCard` sont typées avec une interface TypeScript, `imgSrc` étant optionnelle grâce au `?`.

## Technologies utilisées

* React
* TypeScript
* Vite

Auteur : Théo Sabban
