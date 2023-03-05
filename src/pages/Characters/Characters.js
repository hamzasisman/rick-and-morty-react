import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CharactersTable } from './CharactersTable';
import { GetCharacter } from '../../services/Services';
import { Pagination } from '../../components';

export const Characters = () => {

    const location = useLocation();
    const characterArray = location.state.characters || false;
    const [characters, setCharacters] = useState([]);
    const limit = parseInt(process.env.REACT_APP_TABLE_ROW_LIMIT);
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        characterArray.forEach((character) => {
            //url içinden sondaki id'yi almak için numaraları bulan bir regex kullanıyoruz.
            const regex = /\d+$/;
            const characterId = parseInt(character.match(regex)[0]);
            getCharacter(characterId);
        });
    }, []);

    let filteredCharacters;
    if (characters.length === characterArray.length) {
        //Pagination için 
        filteredCharacters = characters.slice(start, start+limit)
    }

    return (
        <div className='mb-7'>
            <CharactersTable data={filteredCharacters} />
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
