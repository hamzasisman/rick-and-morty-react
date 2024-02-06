import React, { useEffect, useState } from 'react';
import { NoRecordsFound, Pagination } from '../../components';
import ProductCards from './ProductCards';

export const Products = (props) => {

    const { searchInput, detailSearch, data, setData, setLoading } = props

    const limit = parseInt(process.env.REACT_APP_TABLE_LIMIT);

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    //Toplam verinin uzunluğu
    const [totalRecord, setTotalRecord] = useState(0);
    const [searchedData, setSearchedData] = useState([]);
    //Sayfa başına gösterilecek veri
    const [filteredData, setFilteredData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    useEffect(() => {
        resetValue();

        //Input'a girilen değere göre filtreleme yaparak arama yapıyoruz
        if (data) {
            let tmpSearchedData = data.filter((item) => {

                const nameMatches = item.name.toLowerCase().includes(searchInput.toLowerCase());
                const modelNameMatches = item.model.toLowerCase().includes(searchInput.toLowerCase());

                const brandMatches = !detailSearch.brands.length || detailSearch.brands.includes(item.brand);
                const modelIdMatches = !detailSearch.models.length || detailSearch.models.includes(item.model);

                return (nameMatches || modelNameMatches) && brandMatches && modelIdMatches;
            });

            setSearchedData(searchedData => tmpSearchedData);
            setTotalRecord(totalRecord => tmpSearchedData.length)
        }
    }, [data, searchInput, detailSearch]);

    useEffect(() => {
        // Data'dan pagination'a göre listelenecek aralığı filtreliyoruz
        setFilteredData(searchedData.slice(start, start + limit));

        //input'a her veri girdiğimizde yukarı scroll olmasını sağlıyoruz.
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [start, searchedData, limit]);

    useEffect(() => {
        let sortedDataCopy = [...data];
        if (detailSearch.sortType === 0)
            sortedDataCopy.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        else if (detailSearch.sortType === 1)
            sortedDataCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        else if (detailSearch.sortType === 2)
            sortedDataCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        else if (detailSearch.sortType === 3)
            sortedDataCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

        setSortedData(sortedDataCopy);
    }, [detailSearch.sortType, data]);

    useEffect(() => {
        setFilteredData(sortedData.slice(start, start + limit));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [start, sortedData, limit]);

    useEffect(() => {
        resetValue();
    }, [detailSearch, data]);

    return (
        <div className='w-full'>

            <ProductCards data={filteredData} />

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