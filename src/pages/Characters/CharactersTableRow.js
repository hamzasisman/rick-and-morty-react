import React, { useRef } from 'react'
import { Modal, ModalOverlay, OpenModal } from '../../components';

export const CharactersTableRow = ({ character }) => {

  const modalRef = useRef();
  const modalOverlayRef = useRef();

  return (
    <>
      <tr className="bg-white hover:bg-[#f0f0f0]">
        <td className="td">
          <img className='rounded-full' width={100} height={100} src={character.image} />
        </td>
        <td className="td align-middle">
          <button
            className='text-primary hover:font-bold hover:underline focus:font-bold focus:underline'
            onClick={() => {OpenModal(modalOverlayRef, modalRef)}}>
            {character.name}
          </button>
        </td>
      </tr>

      {/* --- Modal --- */}
      <ModalOverlay ref={modalOverlayRef} />
      <Modal
        ref={modalRef}
        character = {character}
        overlayRef={modalOverlayRef}
      />
    </>
  )
}
