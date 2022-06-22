import axios from 'axios';

export const getPokemonData = async (searchParams: string | undefined) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${searchParams}`
  );

  return data;
};
