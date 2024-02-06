import React from 'react';

const Search = (props) => {

    const { placeholder, setSearchInput, className, inputClassName } = props;

    return (
        <>
            <div
                className="w-full max-w-5xl my-3"
            >
                <label htmlFor="search-field" className="sr-only">
                    Search
                </label>
                <div className={`relative w-full text-white focus-within:text-[#BFBFBF] ${className}`}>
                    <label
                        htmlFor="search-field"
                        className="cursor-pointer hover:opacity-80 absolute inset-y-0 left-0 flex items-center px-3"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <input
                        className={`block h-full w-full border border-transparent bg-[#0F5ABC] focus-within:bg-white transition-colors duration-400 py-2 pl-10 pr-3 text-white focus:text-base-text placeholder-white/80 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm rounded-md ${inputClassName}`}
                        type="text"
                        placeholder="Search"
                        onChange={e => { setSearchInput && setSearchInput(searchInput => e.target.value);}}
                    />
                </div>
            </div>
        </>
    )
}

export default Search
