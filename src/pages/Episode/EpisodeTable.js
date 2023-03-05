import React from 'react'
import { EpisodeTableRow } from './EpisodeTableRow';
import { Loading } from '../../components'

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
                  <th className="th"><p>Bölüm</p></th>
                  <th className="th"><p>İsim</p></th>
                  <th className="th"><p>Tarih</p></th>
                  <th className="th"><p>Karakterler</p></th>
                </tr>
              </thead>
              <tbody>
                {
                  data ? (
                  <EpisodeTableRow data={data} />
                  )
                  :
                  (
                  <tr className="bg-white hover:bg-[#f0f0f0]">
                    <td colSpan="4">
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
