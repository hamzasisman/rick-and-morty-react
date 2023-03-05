import React, { useState } from 'react'
import { CharactersTableRow } from './CharactersTableRow'
import { Loading, Modal, Card } from '../../components'

export const CharactersTable = (data) => {

    const [characterArray, setCharacterArray] = useState({})
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    data = data?.data;

    return (
        <>
            <div className="mx-auto px-4">
                <div className="-mx-4 sm:-mx-8 px-4 overflow-x-auto sm:overflow-x-hidden hover:overflow-x-auto">
                    <div className="inline-block min-w-full rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal text-header">
                            <thead>
                                <tr>
                                    <th className="th"><p>Fotoğraf</p></th>
                                    <th className="th"><p>İsim</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data ?
                                    data.map((character, index) => (
                                        <CharactersTableRow
                                            key={index}
                                            character={character}
                                            setCharacterArray = {setCharacterArray}
                                            setModal={setModal}
                                            setModalContent={setModalContent}
                                        />
                                    ))
                                    :
                                    (
                                        <tr className="bg-white hover:bg-[#f0f0f0]">
                                            <td colSpan="5">
                                                <Loading />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        {(Object.keys(modalContent).length !== 0) && (
                            <Modal modal={modal} setModal={setModal} classes={
                                {
                                    modal: "max-h-max max-w-max",
                                }}>
                                {modalContent.element === "card" && <Card character={characterArray} />}

                            </Modal>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
