import React from 'react'

export const EpisodesTableRow = (props) => {
    return (
        <>
            <tr className="bg-white hover:bg-[#f0f0f0]">
                <td className="td align-top">
                    <button className='text-primary hover:font-bold hover:underline focus:font-bold focus:underline'>{props.episode.episode}</button>
                </td>
            </tr>
        </>
    );
}
