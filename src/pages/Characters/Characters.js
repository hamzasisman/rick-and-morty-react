import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CharactersTable } from './CharactersTable';
import { GetCharacter } from '../../services/Services';
import { Pagination, Search } from '../../components';

export const Characters = () => {

    let favorites = []
    localStorage.setItem('favorites', JSON.stringify(favorites));

    const location = useLocation();
    const characterArray = location.state.characters || false;
    const [characters, setCharacters] = useState([]);
    const limit = parseInt(process.env.REACT_APP_TABLE_LIMIT);
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState("");


    //Her bir karakter için servise istek atıp, servisten gelen verileri bir array içinde topluyoruz.
    const addCharacter = (character) => {
        setCharacters((prevCharacters) => [...prevCharacters, character]);
    };


    //characters array'inin üzerine sürekli tekrar yazmasın diye, sürekli ilk halinde kalmasını sağlıyoruz
    if (characters.length > characterArray.length) {
        setCharacters(characters.slice(0, characterArray.length));
    }

    const getCharacter = async (id) => {

        const result = await GetCharacter(id);

        if (result) {
            addCharacter(result)
            setLoading(loading => false);
        } else {
            console.log("Karakter bilgisi yüklenemedi!");
        }
    }
    
    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    useEffect(() => {
        characterArray.forEach((character) => {
            //url içinden sondaki id'yi almak için numaraları bulan bir regex kullanıyoruz.
            const regex = /\d+$/;
            const characterId = parseInt(character.match(regex)[0]);
            getCharacter(characterId);
        });
    }, []);

    //Input'a girilen değere göre filtreleme yaparak arama yapıyoruz
    let searchedData = []
    if (characters.length === characterArray.length) {
        searchedData = characters.filter(
            (item) =>
                item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }

    // Data'dan pagination'a göre listelenecek aralığı filtreliyoruz
    let filteredData = [];
    if (searchedData.length > 0) {
        filteredData = searchedData.slice(start, start + limit);
    }

    return (
        <div className='mb-7'>
        <Search
            placeholder="Aramak için karakter ismi giriniz"
            classname="mt-5"
            onChange={(e) => {
                setSearchInput(e.target.value)
                resetValue()
            }}
        />
            <CharactersTable data={filteredData} />
            {characters &&
                <Pagination
                    totalCount={characters.length}
                    limit={limit}
                    start={start}
                    setStart={setStart}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setLoading={setLoading}
                />
            }
        </div>
    )
}
