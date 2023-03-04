import { fetchApi } from "./FetchApi";

export const GetEpisodes = async () => {

    const url = 'https://rickandmortyapi.com/api/episode';

    return await fetchApi(url);
}
  