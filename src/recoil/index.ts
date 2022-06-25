import { atom, selector, selectorFamily } from 'recoil';
import { getPokemonData } from '../apis';

export const pokemonDataParams = atom<string | undefined>({
  key: 'pokemonDataParams',
  default: '',
});

export const pokemonDataAsyncState = selector<any>({
  key: 'pokemonDataAsyncState',
  get: ({ get }) => {
    const searchParams = get(pokemonDataParams);

    return getPokemonData(searchParams);
  },
});

export const pikachuDataAsyncState = selectorFamily<any, string | undefined>({
  key: 'pikachuDataAsyncState',
  get:
    (queryParameters) =>
    async ({ get }) => {
      const data = await getPokemonData(queryParameters);

      return data;
    },
});
