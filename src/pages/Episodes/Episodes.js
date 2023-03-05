import React, { useEffect, useState } from 'react'
import { GetEpisodes } from '../../services/EpisodeServices';
import { EpisodesTable } from './EpisodesTable';
import { Pagination } from '../../components';

export const Episodes = () => {

    const [data, setData] = useState(null)
    const limit = parseInt(process.env.REACT_APP_TABLE_ROW_LIMIT);
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecord, setTotalRecord] = useState(0);

    const getEpisodes = async () => {

        const result = await GetEpisodes();

        if (result) {
            setData(result)
            setTotalRecord(totalRecord => result && result.length);
            setLoading(loading => false);
        } else {
            console.log("Bölümler yüklenemedi!");
        }
    }

    useEffect(() => {
        getEpisodes()
    }, [])

    //sayfa değiştikçe bilgileri yeniden çağırıyoruz
    useEffect(() => {
        if (totalRecord !== 0) {
            getEpisodes();
        }
    }, [start])

    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    let filteredData = [];

    if (data) {
        filteredData = data.filter((data) => (
            data.id > start && data.id <= start + limit
        ))
    }

    return (
        <div className='mb-7'>
            <EpisodesTable data={filteredData} />
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
            }
        </div>
    )
}