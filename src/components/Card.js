import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="relative">
                <div
                    className="bg-white border border-primary rounded-[40px] w-[350px] h-[400px] text-base-text relative z-10">
                    <div className="m-3 flex justify-center">
                        <img className="w-[55%] rounded-full" alt="" src={props.character.image} />
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <p className="text-[24px] font-bold">{props.character.name}</p>
                        <p className="text-primary font-bold">{props.character.location.name}</p>
                        <div className="flex justify-around mt-3">
                            <div>
                                <p className="mb-1 font-bold  border-b border-b-[#999999]">Gender</p>
                                <p className="text-secondary text-[20px] font-bold">{props.character.gender}</p>
                            </div>
                            <div>
                                <p className="mb-1 font-bold  border-b border-b-[#999999]">Species</p>
                                <p className="text-secondary text-[20px] font-bold">{props.character.species}</p>
                            </div>
                        </div>
                    </div>
                    <p
                        className="absolute bg-[#198754] text-white rounded-[10px] top-4 right-4 px-4 py-1 hover:opacity-80 focus:opacity-80">
                        {props.character.status}</p>
                </div>
                <div
                    className="bg-primary border border-primary rounded-[40px] w-[350px] h-[400px] absolute top-[10px] left-0 z-0">
                </div>
                <div id={"overlay_" + props.character.id} className="absolute inset-0 z-20 rounded-[40px]"></div>
                <div className="absolute left-[calc(50%-64px)] top-[calc(50%-24px)] hidden group-hover:flex items-center justify-center z-30">
                    <button id={"button_" + props.character.id} className="bg-transparent border border-white text-white  hover:bg-white hover:text-[#48cfad] focus:bg-white focus:text-[#48cfad] group-hover:animate-slideIn text-[20px] py-2 w-[128px] font-bold flex justify-center items-center transition-colors duration-300">
                    </button>
                </div>
                {/* <button className="modal-close-button z-50"><span className=" opacity-80 hover:opacity-100">X</span></button> */}
            </div>
        </>
    )
}

export default Card;
