import React, { useEffect, useState } from 'react';
import { LeftSidebar, Navbar, RightSidebar } from '../../components';
import { Products } from './Products';

export const ProductsLayout = () => {

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    return (
        <div className='pb-10'>
            <Navbar setSearchInput={setSearchInput} />

            <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4 max-w-7xl mx-auto'>
                <div className='flex flex-col items-end w-[17%] min-w-[200px]'>
                    <LeftSidebar />
                </div>
                <div className='flex-1'>
                    <Products searchInput={searchInput} />
                </div>

                <div className='flex flex-col w-[17%] min-w-[200px]'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}