import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import Search from './Search';

const LeftSidebar = (props) => {

    const { sortType, setSortType, data, detailSearch, setDetailSearch } = props;

    const [brandSearchInput, setBrandSearchInput] = useState("");
    const [modelSearchInput, setModelSearchInput] = useState("");

    //Data'nın içinde yer alan tüm brandleri bir array'de topluyoruz
    const brandArray = [...new Set(data.map(item => item.brand))];
    const brands = brandArray.map((brand, index) => ({
        id: index,
        brand: brand
    }));

    //Data'nın içinde yer alan tüm modelleri bir array'de topluyoruz
    const modelArray = [...new Set(data.map(item => item.model))];
    const models = modelArray.map((model, index) => ({
        id: index,
        model: model
    }));

    let sortBy = [
        { id: 0, text: "Old to new" },
        { id: 1, text: "New to old" },
        { id: 2, text: "Price high to low" },
        { id: 3, text: "Price low to high" }
    ]

    const handleBrandClick = (brandId) => {
        setDetailSearch({ ...detailSearch, brandIds: [...detailSearch.brandIds, brandId] });
    };

    const handleModelClick = (modelId) => {
        setDetailSearch({ ...detailSearch, modelIds: [...detailSearch.modelIds, modelId] });
    };

    const handleSelectedBrandCheckbox = (id) => {
        if (detailSearch.brandIds.includes(id)) {
            return 'bg-primary border border-primary text-white'
        } else {
            return 'border border-[#aaaaaa]'
        }
    };

    const handleSelectedModelCheckbox = (id) => {
        if (detailSearch.modelIds.includes(id)) {
            return 'bg-primary border border-primary text-white'
        } else {
            return 'border border-[#aaaaaa]'
        }
    };

    return (
        <div className='w-full flex flex-col gap-5'>
            <div>
                <p className='text-[#999]'>Sort By</p>
                <div className='shadow-content bg-white py-5 px-3 w-full flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                        {sortBy.map((item, index) => (
                            <div key={index} className="flex gap-2 items-center">
                                <button
                                    id={item.id}
                                    onClick={(e) => setSortType(parseInt(e.target.id))}
                                    type="button"
                                    className={`w-6 h-6 bg-white border rounded-full cursor-pointer flex items-center justify-center  ${sortType === item.id ? 'border-primary' : ''}`}
                                >
                                    <span className={`w-[14px] h-[14px] pointer-events-none rounded-full ${sortType === item.id ? 'bg-primary' : ''}`}></span>

                                </button>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <p className='text-[#999]'>Brands</p>
                <div className='shadow-content bg-white py-5 px-3 w-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='-my-3'>
                            <Search setSearchInput={setBrandSearchInput} className="!text-[#BFBFBF]" inputClassName="!border-card !bg-white !text-base-text !placeholder-[#BFBFBF]" />
                        </div>
                        <div className='h-[90px] overflow-y-scroll flex flex-col gap-3'>
                            {brands.map((brand, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        <input
                                            id={`brand_${index}`}
                                            type="checkbox"
                                            className="hidden peer"
                                            onChange={() => handleBrandClick(brand.id)}
                                        />
                                        <label
                                            htmlFor={`brand_${index}`}
                                            className={`${handleSelectedBrandCheckbox(brand.id)} mr-2 w-4 h-4 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                                        >
                                            <span className={classNames('text-inherit text-[16px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden': !detailSearch.brandIds.includes(brand.id) })}>
                                                done
                                            </span>
                                        </label>
                                    </div>
                                    <p>{brand.brand}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-[#999]'>Models</p>
                <div className='shadow-content bg-white py-5 px-3 w-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='-my-3'>
                            <Search setSearchInput={setModelSearchInput} className="!text-[#BFBFBF]" inputClassName="!border-card !bg-white !text-base-text !placeholder-[#BFBFBF]" />
                        </div>
                        <div className='h-[90px] overflow-y-scroll flex flex-col gap-3'>
                            {models.map((model, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        <input
                                            id={`model_${index}`}
                                            type="checkbox"
                                            className="hidden peer"
                                            onChange={() => handleModelClick(model.id)}
                                        />
                                        <label
                                            htmlFor={`model_${index}`}
                                            className={`${handleSelectedModelCheckbox(model.id)} mr-2 w-4 h-4 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                                        >
                                            <span className={classNames('text-inherit text-[16px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden': !detailSearch.modelIds.includes(model.id) })}>
                                                done
                                            </span>
                                        </label>
                                    </div>
                                    <p>{model.model}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar