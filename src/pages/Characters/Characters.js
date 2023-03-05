import React from 'react'
import { useLocation } from 'react-router-dom';
import { CharactersTable } from './CharactersTable';

export const Characters = () => {

    const location = useLocation();
    console.log(location.state);
    const characterArray = location.state.characters || false;
    console.log(characterArray);

    return (
        <div className='mb-7'>
            {/* <CharactersTable data={filteredData} />
            {data &&
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
