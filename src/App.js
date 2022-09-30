import './App.css';
import PokemonGallery from './PokemonGallery.js';
import * as pokemonsDetails from './resources/pokemon.json';
import FilteredPokemons from './FilteredPokemonGallery';

function App() {
  // return <FilteredPokemons pokemons={pokemonsDetails.default} />;

  return <PokemonGallery pokemons={pokemonsDetails.default} />;
}

export default App;
