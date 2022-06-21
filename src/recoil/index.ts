import { atom } from 'recoil';

export const pokemonDataState = atom<any>({
  key: 'pokemonData',
  default: null,
});
