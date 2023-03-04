import React, { useEffect, useState } from 'react'
import { GetEpisodes } from '../../services/EpisodeServices';
import { EpisodeTable } from './EpisodeTable';

export const Episodes = () => {

    const [data, setData] = useState(null)

    const getEpisodes = async () => {

        const result = await GetEpisodes();

        if (result) {
            setData(result)
        } else {
            console.log("Bölümler yüklenemedi!");
        }
    }

    useEffect(() => {
        getEpisodes()
    }, [])

    return (
        <div className='mb-7'>
            <EpisodeTable data={data} />
        </div>
    )
}