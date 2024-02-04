import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

export const ProductsLayout = () => {


    return (
        <div className='pb-10'>
            <Navbar />

            <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4'>
                <div className='flex flex-col items-end w-[15%]'><p>Selam</p></div>
                <div className='w-[70%]'>
                    <Outlet />
                </div>

                <div className='flex flex-col w-[15%] '><p>Selam</p></div>
            </div>
        </div>
    )
}