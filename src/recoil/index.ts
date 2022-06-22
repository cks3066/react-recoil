import { atom, selector } from 'recoil';
import { getPokemonData } from '../apis';

export const pokemonDataParams = atom<string | undefined>({
  key: 'pokemonDataParams',
  default: '',
});

export const pokemonDataAsyncState = selector<any>({
  key: 'pokemonDataAsyncState',
  get: async ({ get }) => {
    const searchParams = get(pokemonDataParams);

    return getPokemonData(searchParams);
  },
});
