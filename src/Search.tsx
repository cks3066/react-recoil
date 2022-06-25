import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { pokemonDataParams } from './recoil';

function Search() {
  const setPokemonDataParams = useSetRecoilState(pokemonDataParams);
  const nameInput = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPokemonDataParams(nameInput.current?.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={nameInput} />
        <button type="submit">검색</button>
      </form>
    </>
  );
}

export default Search;
