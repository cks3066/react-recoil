import React from 'react';
import { useRecoilState } from 'recoil';
import { pokemonDataState } from './recoil';

function Result() {
  const [pokemonData, setPokemonData] = useRecoilState(pokemonDataState);

  if (!pokemonData) {
    return <div>결과 없음</div>;
  }
  return <div>{pokemonData}</div>;
}

export default Result;
