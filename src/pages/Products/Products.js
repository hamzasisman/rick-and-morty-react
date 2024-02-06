import React, { useEffect, useState } from 'react';
import { NoRecordsFound, Pagination } from '../../components';
import ProductCards from './ProductCards';

export const Products = (props) => {

    const { searchInput, sortType, data, setData, setLoading } = props

    const limit = parseInt(process.env.REACT_APP_TABLE_LIMIT);

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    //Toplam verinin uzunluğu
    const [totalRecord, setTotalRecord] = useState(0);
    const [searchedData, setSearchedData] = useState([])
    //Sayfa başına gösterilecek veri
    const [filteredData, setFilteredData] = useState([])

    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    useEffect(() => {
        resetValue();

        //Input'a girilen değere göre filtreleme yaparak arama yapıyoruz
        if (data) {
            let tmpSearchedData = []

            tmpSearchedData = data.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                    item.model.toLowerCase().includes(searchInput.toLowerCase())
            );

            setSearchedData(searchedData => tmpSearchedData);
            setTotalRecord(totalRecord => tmpSearchedData.length)
        }
    }, [data, searchInput, sortType]);

    useEffect(() => {
        // Data'dan pagination'a göre listelenecek aralığı filtreliyoruz
        setFilteredData(searchedData.slice(start, start + limit));

        //inpur'a her veri girdiğimizde yukarı scroll olmasını sağlıyoruz.
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [start, searchedData, limit]);

    useEffect(() => {
        let sortedData = [];
        if (data) {
            if (sortType === 0)
                sortedData = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            else if (sortType === 1)
                sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            else if (sortType === 2)
                sortedData = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            else if (sortType === 3)
                sortedData = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }

        setData(data => sortedData)
    }, [sortType])

    return (
        <div className='w-full'>
            {filteredData.length > 0 &&
                <ProductCards data={filteredData} />
            }

            {filteredData.length === 0 &&
                <NoRecordsFound />
            }
            {data &&
                <Pagination
                    totalCount={totalRecord}
                    limit={limit}
                    start={start}
                    setStart={setStart}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setLoading={setLoading}
                />
            }
        </div>
    )
}