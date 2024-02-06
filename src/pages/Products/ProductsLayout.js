import React, { useEffect, useState } from 'react';
import { LeftSidebar, Loading, Navbar, RightSidebar } from '../../components';
import { GetProducts } from '../../services/Services';
import { Products } from './Products';

export const ProductsLayout = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState(0);
    const [searchInput, setSearchInput] = useState("");

    const [detailSearch, setDetailSearch] = useState({
        sortType: 0,
        brandIds: [],
        modelIds: [],
    });

    const getProducts = async () => {

        setLoading(loading => true);

        const result = await GetProducts();

        if (result) {
            setData(result)
        } else {
            console.log("Ürünler yüklenemedi!");
        }
        setLoading(loading => false);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        getProducts();
    }, [])

    return (
        <div className='w-full'>
            <div className='pb-10'>
                <Navbar setSearchInput={setSearchInput} />
                <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4 max-w-7xl mx-auto'>
                    {loading && (
                        <Loading />
                    )}

                    {
                        !loading && (

                            <>
                                <div className='flex flex-col items-end w-[17%] min-w-[200px]'>
                                    <LeftSidebar
                                        sortType={sortType}
                                        setSortType={setSortType}
                                        data={data}
                                        detailSearch={detailSearch}
                                        setDetailSearch={setDetailSearch}
                                    />
                                </div>
                                <div className='flex-1'>
                                    <Products
                                        searchInput={searchInput}
                                        sortType={sortType}
                                        detailSearch={detailSearch}
                                        data={data}
                                        setData={setData}
                                        setLoading={setLoading}
                                    />
                                </div>

                                <div className='flex flex-col w-[17%] min-w-[200px]'>
                                    <RightSidebar />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}