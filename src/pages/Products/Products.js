import React, { useEffect, useState } from 'react';
import { Loading, Pagination } from '../../components';
import { GetProducts } from '../../services/Services';
import ProductCards from './ProductCards';

export const Products = () => {

    const [data, setData] = useState(null)
    const [productData, setProductData] = useState(null)
    const limit = parseInt(process.env.REACT_APP_TABLE_LIMIT);
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecord, setTotalRecord] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [searchedData, setSearchedData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const getProducts = async () => {

        setLoading(loading => true);

        const result = await GetProducts();

        if (result) {
            setProductData(result)
            setTotalRecord(totalRecord => result && result.length);
            setLoading(loading => false);
        } else {
            console.log("Ürünler yüklenemedi!");
        }
    }

    //Arama verileri değiştiğinde değerleri sıfırlıyoruz
    const resetValue = () => {
        setStart(start => 0);
        setCurrentPage(currentPage => 1);
    }

    useEffect(() => {
        // Data'dan pagination'a göre listelenecek aralığı filtreliyoruz
        if (searchedData?.length > 0) {
            setFilteredData(searchedData.slice(start, start + limit));
        }
    }, [searchedData, start, limit]);


    useEffect(() => {

        //Input'a girilen değere göre filtreleme yaparak arama yapıyoruz
        if (productData) {
            let tmpSearchedData = []

            if (searchInput.length > 0) {
                tmpSearchedData = productData.filter(
                    (item) =>
                        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                        item.model.toLowerCase().includes(searchInput.toLowerCase())
                );
            } else {
                tmpSearchedData = productData;
            }

            setSearchedData(searchedData => tmpSearchedData);
        }
    }, [searchInput]);

    useEffect(() => {
        if (searchedData?.length > 0) {
            setTotalRecord(searchedData.length)
        }
    }, [searchedData])

    //sayfa değiştikçe bilgileri yeniden çağırıyoruz
    useEffect(() => {
        if (totalRecord !== 0) {
            getProducts();
        }
        setFilteredData(filteredData => searchedData.slice(start, start + limit))
    }, [start, totalRecord])

    useEffect(() => {
        getProducts();

        //Sayfa ilk yüklendiğinde localStorage'deki değişkeni alıp yerine tekrar boş string set ediyoruz
        setSearchInput(searchInput => JSON.parse(localStorage.getItem('searchInput')) || '')
        // localStorage.removeItem('searchInput');
    }, [])

    return (
        <div className='w-full'>
            {loading && (
                <Loading />
            )}

            {
                !loading && (
                    <>
                        <p>{searchInput}</p>
                        <ProductCards data={filteredData.length > 0 ? filteredData : productData} />
                        {productData &&
                            <Pagination
                                totalCount={filteredData.length || productData}
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