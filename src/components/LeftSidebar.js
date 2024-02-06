import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import NoRecordsFound from './NoRecordsFound';
import Search from './Search';

const LeftSidebar = (props) => {

    const { data, detailSearch, setDetailSearch } = props;

    const [brandSearchInput, setBrandSearchInput] = useState("");
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [modelSearchInput, setModelSearchInput] = useState("");
    const [filteredModels, setFilteredModels] = useState([]);

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

    const handleSortTypeClick = (sortType) => {
        setDetailSearch({ ...detailSearch, sortType: sortType });
    }

    const handleBrandClick = (brandName) => {
        if (!detailSearch.brands.includes(brandName)) {
            setDetailSearch({ ...detailSearch, brands: [...detailSearch.brands, brandName] });
        }
    };

    const handleModelClick = (modelName) => {
        if (!detailSearch.models.includes(modelName)) {
            setDetailSearch({ ...detailSearch, models: [...detailSearch.models, modelName] });
        }
    };


    const handleSelectedBrandCheckbox = (brand) => {
        if (detailSearch.brands.includes(brand)) {
            return 'bg-primary border border-primary text-white'
        } else {
            return 'border border-[#aaaaaa]'
        }
    };

    const handleSelectedModelCheckbox = (model) => {
        if (detailSearch.models.includes(model)) {
            return 'bg-primary border border-primary text-white'
        } else {
            return 'border border-[#aaaaaa]'
        }
    };

    //Araam yaptıkça listelenecek brand'lerin güncellenmesini sağlıyoruz
    useEffect(() => {
        let tmpFilteredBrands = brands.filter((brand) => brand.brand.includes(brandSearchInput))
        setFilteredBrands(filteredBrands => tmpFilteredBrands)
    }, [brandSearchInput])

    //Araam yaptıkça listelenecek model'lerin güncellenmesini sağlıyoruz
    useEffect(() => {
        let tmpFilteredModels = models.filter((model) => model.model.includes(modelSearchInput))
        setFilteredModels(filteredModels => tmpFilteredModels)
    }, [modelSearchInput])


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
                                    onClick={() => handleSortTypeClick(item.id)}
                                    type="button"
                                    className={`w-6 h-6 bg-white border rounded-full cursor-pointer flex items-center justify-center  ${detailSearch.sortType === item.id ? 'border-primary' : ''}`}
                                >
                                    <span className={`w-[14px] h-[14px] pointer-events-none rounded-full ${detailSearch.sortType === item.id ? 'bg-primary' : ''}`}></span>

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
                        <div className={classNames("h-[90px] flex flex-col gap-3", {
                            "overflow-y-scroll": filteredBrands.length > 3
                        })}>
                            {filteredBrands.map((brand, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        <input
                                            id={`brand_${index}`}
                                            type="checkbox"
                                            className="hidden peer"
                                            onChange={() => handleBrandClick(brand.brand)}
                                        />
                                        <label
                                            htmlFor={`brand_${index}`}
                                            className={`${handleSelectedBrandCheckbox(brand.brand)} mr-2 w-4 h-4 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                                        >
                                            <span className={classNames('text-inherit text-[16px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden': !detailSearch.brands.includes(brand.brand) })}>
                                                done
                                            </span>
                                        </label>
                                    </div>
                                    <p>{brand.brand}</p>
                                </div>
                            ))}
                            {filteredBrands.length === 0 && (
                                <NoRecordsFound />
                            )}
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
                        <div className={classNames("h-[90px] flex flex-col gap-3", {
                            "overflow-y-scroll": filteredModels.length > 3
                        })}>
                            {filteredModels.map((model, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        <input
                                            id={`model_${index}`}
                                            type="checkbox"
                                            className="hidden peer"
                                            onChange={() => handleModelClick(model.model)}
                                        />
                                        <label
                                            htmlFor={`model_${index}`}
                                            className={`${handleSelectedModelCheckbox(model.model)} mr-2 w-4 h-4 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                                        >
                                            <span className={classNames('text-inherit text-[16px] material-symbols-outlined animate-fadeIn font-bold', {
                                                'hidden': !detailSearch.models.includes(model.model)
                                            })}>
                                                done
                                            </span>
                                        </label>
                                    </div>
                                    <p>{model.model}</p>
                                </div>
                            ))}

                            {filteredModels.length === 0 && (
                                <NoRecordsFound />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar