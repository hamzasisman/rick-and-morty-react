import React, { useEffect, useState } from 'react';
import { Loading, NoRecordsFound, Pagination } from '../../components';
import { GetProducts } from '../../services/Services';
import ProductCards from './ProductCards';

export const Products = (props) => {

    const { searchInput } = props

    const [data, setData] = useState(null)
    const limit = parseInt(process.env.REACT_APP_TABLE_LIMIT);
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    //Toplam verinin uzunluğu
    const [totalRecord, setTotalRecord] = useState(0);
    const [searchedData, setSearchedData] = useState([])
    //Sayfa başına gösterilecek veri
    const [filteredData, setFilteredData] = useState([])

    const getProducts = async () => {

        setLoading(loading => true);

        const result = await GetProducts();

        if (result) {
            setData(result)
            setTotalRecord(totalRecord => result && result.length);
        } else {
            console.log("Ürünler yüklenemedi!");
        }
        setLoading(loading => false);
    }

    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    useEffect(() => {

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
    }, [data, searchInput]);

    useEffect(() => {
        // Data'dan pagination'a göre listelenecek aralığı filtreliyoruz
        setFilteredData(searchedData.slice(start, start + limit));

        //inpur'a her veri girdiğimizde yukarı scroll olmasını sağlıyoruz.
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [start, searchedData, limit]);

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className='w-full'>
            {loading && (
                <Loading />
            )}

            {
                !loading && (
                    <>
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
                        }</>
                )
            }
        </div>
    )
}