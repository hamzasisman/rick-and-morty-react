import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../../stores/store";
import { HeartButton } from '../../components';

export const CharactersTableRow = ({ character, setCharacterArray, setModal, setModalContent }) => {

  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = JSON.parse(localStorage.getItem('favorites'));

  useEffect(() => {
    if (isFavorite) {
      favorites.push(character)
    }
    else {
      console.log("Favorilerden Kaldırıldı")
    }

  }, [isFavorite])

  return (
    <>
      <tr className="bg-white hover:bg-[#f0f0f0]">
        <td className="td">
          <img className='rounded-full' width={100} height={100} src={character.image} />
        </td>
        <td className="td align-middle">
          <button
            className='text-primary hover:font-bold hover:underline focus:font-bold focus:underline'
            onClick={() => { setModal(true); setCharacterArray(character); setModalContent({ element: "card" }) }}>
            {character.name}
          </button>
        </td>
        <td className="td align-middle">
          <HeartButton
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
        </td>
      </tr>
    </>
  )
}
