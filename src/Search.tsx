import React from 'react';
import { useSetRecoilState } from 'recoil';
import { pokemonDataState } from './recoil';
import axios from 'axios';

function Search() {
  const setPokemonData = useSetRecoilState(pokemonDataState);

  const searchPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
    setPokemonData(data);
    console.log(data);
  };

  return (
    <form onSubmit={searchPokemon}>
      <input type="text" />
      <button type="submit">검색</button>
    </form>
  );
}

export default Search;
