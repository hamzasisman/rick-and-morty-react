import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../components/utility';

const ProductCard = (props) => {

    const product = props.product;

    const navigate = useNavigate();

    let chart = JSON.parse(localStorage.getItem('chart')) || [];

    const handleClick = () => {
        chart.push(product)
        localStorage.setItem('chart', JSON.stringify(chart))
    };

    return (
        <div className='flex flex-col gap-1.5 border border-box p-2 rounded-[10px]'>
            <img
                className='rounded-[10px]'
                width={200}
                src={product.image}
            />
            <p className='font-bold text-primary text-[18px]'>{formatPrice(product.price)}</p>
            <div>
                <button
                    className='underline hover:text-primary focus:text-primary transition-colors duration-300'
                    onClick={() => navigate('/detail', { state: { product: product } })}
                >
                    {product.name}
                </button>
                <p className='-mt-1'>{product.model}</p>
            </div>
            <button
                className='group relative bg-primary rounded-[10px] h-[40px] text-white text-center hover:opacity-80 focus:opacity-80'
                type='button'
                onClick={handleClick}
            >
                Add to Chart
                <span className='tooltip-top'>Added</span>
            </button>
        </div>
    )
}

export default ProductCard