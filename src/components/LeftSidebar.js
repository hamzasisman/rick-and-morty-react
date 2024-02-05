import React from 'react'

const LeftSidebar = (props) => {

    const { sortType, setSortType } = props;

    let sortBy = [
        { id: 0, text: "Old to new" },
        { id: 1, text: "New to old" },
        { id: 2, text: "Price high to low" },
        { id: 3, text: "Price low to high" }
    ]

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
        </div>
    )
}

export default LeftSidebar