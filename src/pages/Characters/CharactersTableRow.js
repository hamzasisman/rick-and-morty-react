import React from 'react'

export const CharactersTableRow = ({ character, setCharacterArray, setModal, setModalContent }) => {

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
      </tr>
    </>
  )
}
