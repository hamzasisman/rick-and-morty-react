import React, { useEffect, useState } from 'react';
import { Navbar, RightSidebar } from '../../components';
import { Products } from './Products';

export const ProductsLayout = () => {

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    return (
        <div className='pb-10'>
            <Navbar setSearchInput={setSearchInput} />

            <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4'>
                <div className='flex flex-col items-end w-[15%]'><p>Selam</p></div>
                <div className='w-[70%]'>
                    <Products searchInput={searchInput} />
                </div>

                <div className='flex flex-col w-[15%] '>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}