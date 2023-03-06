import React from 'react'

const Search = (props) => {

    let placeholder = props.placeholder ? props.placeholder : '';
    let classname = props.classname ? props.classname : '';

    return (
        <input
            className={`input w-full placeholder:!text-[13px] ${classname}`}
            placeholder={placeholder}
            onChange={props.onChange}
        />
    )
}

export default Search
