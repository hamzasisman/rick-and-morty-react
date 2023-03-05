import React from 'react'
import { useNavigate } from 'react-router-dom';

export const EpisodeTableRow = (data) => {

  data = data.data;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/characters', { state: { characters: data.characters } });
  };

  return (
    <>
      <tr className="bg-white hover:bg-[#f0f0f0]">
        <td className="td"><p> {data.episode}</p> </td>
        <td className="td"><p> {data.name}</p></td>
        <td className="td"><p> {data.air_date}</p></td>
        <td className="td">
          <button
            className='text-primary hover:font-bold hover:underline focus:font-bold focus:underline'
            onClick={handleClick}>
            {data.characters.length} Adet
          </button>
        </td>
      </tr>
    </>
  )
}
