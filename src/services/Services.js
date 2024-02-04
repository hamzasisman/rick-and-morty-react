import { fetchApi } from "./FetchApi";

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

export const GetEpisode = async (id) => {

    const url = `https://rickandmortyapi.com/api/episode/${id}`;

    return await fetchApi(url);

}

export const GetCharacter = async (id) => {

    const url = `https://rickandmortyapi.com/api/character/${id}`;

    return await fetchApi(url);

}

export const GetProducts = async () => {
    
    const url = 'https://5fc9346b2af77700165ae514.mockapi.io/products';

    return await fetchApi(url);
}