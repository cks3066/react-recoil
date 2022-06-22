import React from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonDataAsyncState } from './recoil';

function Result() {
  const pokemonData = useRecoilValue(pokemonDataAsyncState);

  if (!pokemonData) {
    return <div>결과 없음</div>;
  }

  return (
    <>
      {/* {pokemonData.sprites.front_default !== undefined} &&
      <img src={pokemonData.sprites.front_default} alt=""></img> */}
      <div>이름: {pokemonData.name}</div>
    </>
  );
}

export default Result;
