import React from 'react'
import { formatPrice } from '../../components/utility';
import useLocalStorage from '../../hooks/useLocalStorage';

const ProductDetail = (props) => {

    const { product } = props;

    const [chart, setChart] = useLocalStorage('chart', []);

    const handleClick = () => {
        setChart([...chart, product]);
        window.location.reload();
    };

    return (
        <div className='shadow-content bg-white p-5'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='lg:min-w-max'>
                    <img
                        className='rounded-[10px] mx-auto w-full lg:w-[30vw] max-w-[400px] !aspect-[640/480]'
                        src={product.image}
                    />
                </div>
                <div>
                    <p className='text-[24px] font-bold'>{product.name}</p>
                    <p className='font-bold text-primary text-[24px]'>{formatPrice(product.price)}</p>
                    <button
                        className='bg-primary w-full my-5 rounded-[10px] h-[40px] text-white text-center hover:opacity-80 focus:opacity-80'
                        type='button'
                        onClick={handleClick}
                    >
                        Add to Chart
                    </button>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail