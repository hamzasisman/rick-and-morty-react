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

            <div className='flex text-base-text justify-between px-5 gap-5 mt-[62px] pt-4 max-w-7xl mx-auto'>
                <div className='flex flex-col w-[17%] min-w-[200px]'></div>
                <div className='flex-1'>
                    <ProductDetail product={product} />
                </div>

                <div className='flex flex-col w-[17%]  min-w-[200px]'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailLayout