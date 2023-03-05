import React from 'react'
import { CharactersTableRow } from './CharactersTableRow'
import { Loading } from '../../components'

export const CharactersTable = (data) => {
    return (
        <>
            <div className="mx-auto px-4 my-4">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto sm:overflow-x-hidden hover:overflow-x-auto">
                    <div className="inline-block min-w-full rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal text-header">
                            <thead>
                                <tr>
                                    <th className="th"><p>Bölümler</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data ?
                                    data.map((episode, index) => (
                                        <CharactersTableRow
                                            key={index}
                                            episode={episode}
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
                    </div>
                </div>
            </div>
        </>
    )
}
