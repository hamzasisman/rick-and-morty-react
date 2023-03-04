import { fetchApi } from "./FetchApi";

// export const GetEpisodes = async () => {

//     const url = 'https://rickandmortyapi.com/api/episode';

//     return await fetchApi(url);
// }

export const GetEpisodes = async () => {

    const url = 'https://rickandmortyapi.com/api/episode';
    let allEpisodes = [];

    // ilk sayfayı getir
    let response = await fetchApi(url);

    // tüm sayfaları dolaş
    while (response.info.next !== null) {
        allEpisodes = allEpisodes.concat(response.results);
        response = await fetchApi(response.info.next);
    }

    // son sayfayı da ekle
    allEpisodes = allEpisodes.concat(response.results);

    return allEpisodes;

}