import './App.css';
import PokemonGallery from './PokemonGallery.js';
import * as pokemonsDetails from './resources/pokemon.json';
import FilteredPokemons from './FilteredPokemonGallery';

function App() {
  // return <FilteredPokemons pokemons={pokemonsDetails.default} />;

  return <div>
    <h1>Pokemon Gallery</h1>
    <PokemonGallery pokemons={pokemonsDetails.default} />
  </div>
}

export default App;
