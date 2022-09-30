import React from 'react';
import Pokemon from './Pokemon.js';

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadUpto: 10 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.setState(({ loadUpto }) => ({ loadUpto: loadUpto + 5 }));
  }

  handleReset() {
    this.setState(({ loadUpto }) => ({ loadUpto: 10 }));
  }

  render() {
    const pokemonsToLoad = this.props.pokemons.slice(0, this.state.loadUpto);
    const pokemons = pokemonsToLoad.map(({ name, image_url }) =>
      <Pokemon key={name} name={name} imageUrl={image_url} />);

    return <div className='gallery'>
      <div className='pokemons'>
        {pokemons}
      </div>

      <button onClick={this.handleClick}>Load more</button>
      <button onClick={this.handleReset}>Reset</button>
    </div>;
  }
}

export default PokemonGallery;