import React from 'react'
import { NoRecordsFound } from '../../components';
import ProductCard from './ProductCard'

const ProductCards = (props) => {

    const { data } = props;

    return (
        <div className='flex flex-wrap gap-7 justify-center shadow-content bg-white py-5'>
            {
                data && data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            }
            {
                data.length === 0 && <NoRecordsFound />
            }
        </div>
    )
}

export default ProductCards