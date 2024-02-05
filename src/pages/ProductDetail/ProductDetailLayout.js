import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar, RightSidebar } from '../../components'
import ProductDetail from './ProductDetail'

const ProductDetailLayout = () => {

    const location = useLocation();
    const product = location?.state?.product;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    return (
        <div className='pb-10'>
            <Navbar />

            <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4'>
                <div className='flex flex-col w-[15%] '><p>Selam</p></div>
                <div className='w-[70%]'>
                    <ProductDetail product={product} />
                </div>

                <div className='flex flex-col w-[15%] '>
                <div className='flex flex-col w-[15%] '>
                    <RightSidebar />
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailLayout