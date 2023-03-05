import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { GetEpisode } from '../../services/EpisodeServices';
import { EpisodeTable } from './EpisodeTable';

export const Episode = () => {

  const location = useLocation();
  const episode = location.state || false;
  console.log(episode.id);

  const [data, setData] = useState(null)
  const limit = parseInt(process.env.REACT_APP_TABLE_ROW_LIMIT);

  const getEpisode = async (id) => {

    const result = await GetEpisode(id);

    if (result) {
      setData(result)
      // setTotalRecord(totalRecord => result && result.length);
      // setLoading(loading => false);
    } else {
      console.log("Bölümler yüklenemedi!");
    }
  }

  useEffect(() => {
    getEpisode(episode.id)
  }, [])

  console.log(data);

  return (
    <div className='mb-7'>

      <EpisodeTable id={episode.id} data={data} />
      
    </div>
  )
}