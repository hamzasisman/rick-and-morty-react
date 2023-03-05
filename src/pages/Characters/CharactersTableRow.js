import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CharactersTableRow = ({ character }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/character/detail');
  };

  return (
    <>
      <tr className="bg-white hover:bg-[#f0f0f0]">
        <td className="td align-top">
          <button
            className='text-primary hover:font-bold hover:underline focus:font-bold focus:underline'
            onClick={handleClick}>
            {character.name}
          </button>
        </td>
      </tr>
    </>
  )
}
