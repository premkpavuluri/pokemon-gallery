import React from 'react';
import PokemonGallery from './PokemonGallery.js';

const Input = ({ value, onChangeHandler }) =>
  <input value={value} onChange={(event) =>
    onChangeHandler(event.target.value)} />;

class FilteredPokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', inputText: 'enter filter' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  filtered() {
    return this.props.pokemons.filter(({ name }) =>
      name.includes(this.state.filter));
  }

  handleOnChange(value) {
    this.setState({ filter: value, inputText: value });
  }

  render() {
    return <div>
      <Input
        value={this.state.inputText}
        onChangeHandler={this.handleOnChange} />
      <PokemonGallery pokemons={this.filtered()} />
    </div>
  }
}

export default FilteredPokemons;
