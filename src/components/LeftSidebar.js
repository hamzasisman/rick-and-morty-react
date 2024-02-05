import React from 'react'

const LeftSidebar = () => {
    return (
        <div className='w-full flex flex-col gap-5'>
            <div>
                <p className='text-[#999]'>Sort By</p>
                <div className='shadow-content bg-white py-5 px-3 w-full flex flex-col gap-3'>
                    <p className='font-bold'>
                        <span>Total Price: </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar