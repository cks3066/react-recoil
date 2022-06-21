import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonDataState } from './recoil';

function Result() {
  const pokemonData = useRecoilValue(pokemonDataState);

  if (!pokemonData) {
    return <div>결과 없음</div>;
  }

  return (
    <>
      <img src={pokemonData.sprites.front_default} alt=""></img>
      <div>이름: {pokemonData.name}</div>
    </>
  );
}

export default Result;
