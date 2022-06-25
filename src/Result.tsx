import React from 'react';
import { useRecoilValue } from 'recoil';
import { pikachuDataAsyncState, pokemonDataAsyncState } from './recoil';

function Result() {
  const pokemonData = useRecoilValue(pokemonDataAsyncState);
  const pikachuData = useRecoilValue(pikachuDataAsyncState('pikachu'));

  if (!pokemonData) {
    return <div>결과 없음</div>;
  }

  return (
    <>
      <div>이름: {pokemonData.name}</div>
      {!!pokemonData.sprites && (
        <img src={pokemonData.sprites.front_default} alt=""></img>
      )}
      <hr />
      <div>
        피카츄 데이터
        <div>이름: {pikachuData.name}</div>
        <img src={pikachuData.sprites.front_default} alt=""></img>
      </div>
    </>
  );
}

export default Result;
