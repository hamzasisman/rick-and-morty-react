import React from 'react'
import ProductCard from './ProductCard'

const ProductCards = (props) => {
    const data = props?.data

    return (
        <div className='flex flex-wrap gap-7 justify-center'>
            {
                data && data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
    )
}

export default ProductCards