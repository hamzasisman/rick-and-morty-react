import React from 'react'
import { Loading } from '../../components'
import { EpisodesTableRow } from './EpisodesTableRow';

export const EpisodeTable = (data) => {

  data = data?.data;

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
                  data.map((discount, index) => (
                    <EpisodesTableRow
                      key={index}
                      discount={discount} />
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
