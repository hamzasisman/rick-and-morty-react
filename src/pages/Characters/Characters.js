import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CharactersTable } from './CharactersTable';
import { GetCharacter } from '../../services/Services';

export const Characters = () => {

    const location = useLocation();
    const characterArray = location.state.characters || false;
    const [characters, setCharacters] = useState([]);

    //Her bir karakter için servise istek atıp, servisten gelen verileri bir array içinde topluyoruz.
    const addCharacter = (character) => {
        setCharacters((prevCharacters) => [...prevCharacters, character]);
    };

    const getCharacter = async (id) => {

        const result = await GetCharacter(id);

        if (result) {
            addCharacter(result)
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

    return (
        <div className='mb-7'>
            <CharactersTable data={characters} />
            {/* {data &&
                <Pagination
                    totalCount={totalRecord}
                    limit={limit}
                    start={start}
                    setStart={setStart}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setLoading={setLoading}
                />
            } */}
        </div>
    )
}
