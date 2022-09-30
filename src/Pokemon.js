import React from 'react';

const Pokemon = ({ name, imageUrl }) => {
  return <figure>
    <figcaption>{name}</figcaption>
    <img src={imageUrl}></img>
  </figure>
};

export default Pokemon;
