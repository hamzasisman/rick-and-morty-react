import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoYatay } from '../assets/img'
import Search from './Search'

const Navbar = () => {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (searchInput !== "") {
            localStorage.setItem('searchInput', JSON.stringify(searchInput));
            window.location.reload();
        }
    }, [searchInput])

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='fixed w-full top-0 z-30 flex h-[62px] flex-shrink-0 bg-[#1269db] shadow-lg px-5'>
            <div className="flex flex-1 justify-between gap-2">
                <button
                    className="flex flex-shrink-0 mb-[3px] items-center w-[15%] min-w-max"
                    onClick={handleClick}
                >
                    <img
                        className="h-[33px] w-auto"
                        src={LogoYatay}
                        alt="Eteration"
                    />
                </button>
                <div className=' w-[70%]'>
                    <Search placeholder="Ara..." setSearchInput={setSearchInput} />
                </div>
                <div className='text-white  w-[15%] flex gap-3 min-w-max'>
                    <div className='flex gap-1 items-center'>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M19.9805 5.64453C19.9805 6.84246 19.9805 8.04035 19.9805 9.23828C19.8496 9.76012 19.5957 10.2158 19.2188 10.6055C19.2057 12.8841 19.1927 15.1628 19.1797 17.4414C18.983 18.185 18.5077 18.6342 17.7539 18.7891C12.5716 18.8151 7.38934 18.8151 2.20703 18.7891C1.45319 18.6342 0.977926 18.185 0.78125 17.4414C0.76823 15.1628 0.755207 12.8841 0.742188 10.6055C0.365185 10.2158 0.111279 9.76012 -0.0195312 9.23828C-0.0195312 8.04035 -0.0195312 6.84246 -0.0195312 5.64453C0.177516 4.95918 0.620223 4.50996 1.30859 4.29688C2.49207 4.24012 3.67697 4.22059 4.86328 4.23828C4.85676 3.69125 4.86328 3.14438 4.88281 2.59766C5.10633 1.8272 5.60766 1.35194 6.38672 1.17188C8.78254 1.14583 11.1784 1.14583 13.5742 1.17188C14.3533 1.35194 14.8546 1.8272 15.0781 2.59766C15.0977 3.14438 15.1042 3.69125 15.0977 4.23828C16.284 4.22059 17.4689 4.24012 18.6523 4.29688C19.3407 4.50996 19.7834 4.95918 19.9805 5.64453ZM6.54297 2.36328C8.83469 2.35677 11.1263 2.36328 13.418 2.38281C13.6293 2.45088 13.7791 2.5876 13.8672 2.79297C13.9207 3.27291 13.9402 3.75468 13.9258 4.23828C11.2956 4.23828 8.66535 4.23828 6.03516 4.23828C6.0207 3.75468 6.04023 3.27291 6.09375 2.79297C6.18895 2.58696 6.33871 2.44373 6.54297 2.36328ZM1.66016 5.44922C7.26078 5.42992 12.8598 5.44945 18.457 5.50781C18.6613 5.62301 18.7719 5.79879 18.7891 6.03516C18.8151 6.95965 18.8151 7.8841 18.7891 8.80859C18.7357 9.26039 18.5339 9.63149 18.1836 9.92188C17.5111 10.4209 16.7689 10.7854 15.957 11.0156C14.667 11.3869 13.3519 11.6147 12.0117 11.6992C12.0182 11.4515 12.0117 11.2041 11.9922 10.957C11.9138 10.7485 11.764 10.6248 11.543 10.5859C10.5013 10.5599 9.45965 10.5599 8.41797 10.5859C8.19691 10.6248 8.04715 10.7485 7.96875 10.957C7.94922 11.2041 7.94273 11.4515 7.94922 11.6992C6.2248 11.603 4.55816 11.245 2.94922 10.625C2.30745 10.3731 1.78011 9.97594 1.36719 9.43359C1.24703 9.24238 1.18193 9.03406 1.17188 8.80859C1.14583 7.8841 1.14583 6.95965 1.17188 6.03516C1.20379 5.72383 1.36655 5.52852 1.66016 5.44922ZM1.93359 11.5039C3.39719 12.1824 4.93363 12.6055 6.54297 12.7734C7.02352 12.8345 7.50527 12.8801 7.98828 12.9102C8.24445 13.9439 8.90852 14.4648 9.98047 14.4727C11.0524 14.4648 11.7165 13.9439 11.9727 12.9102C13.7262 12.8219 15.432 12.4899 17.0898 11.9141C17.3975 11.7963 17.697 11.6595 17.9883 11.5039C18.0339 13.3527 18.0404 15.2017 18.0078 17.0508C17.975 17.3052 17.8383 17.481 17.5977 17.5781C12.5195 17.6042 7.44141 17.6042 2.36328 17.5781C2.12266 17.481 1.98594 17.3052 1.95312 17.0508C1.93359 15.2019 1.92708 13.3529 1.93359 11.5039ZM9.12109 11.7773C9.69402 11.7773 10.2669 11.7773 10.8398 11.7773C10.8463 12.0251 10.8398 12.2725 10.8203 12.5195C10.7664 13.0226 10.4865 13.27 9.98047 13.2617C9.47445 13.27 9.19449 13.0226 9.14062 12.5195C9.12109 12.2725 9.11461 12.0251 9.12109 11.7773Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className='min-w-max'>117.000 tl</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.35526 -0.0195312C9.77194 -0.0195312 10.1886 -0.0195312 10.6053 -0.0195312C12.8677 0.347955 14.3586 1.624 15.0779 3.80859C15.5871 5.96539 15.0337 7.79484 13.4178 9.29688C11.8017 10.5621 10.0178 10.8616 8.0662 10.1953C6.1469 9.3825 5.03362 7.94371 4.72636 5.87891C4.55913 3.6157 5.42503 1.87742 7.32401 0.664062C7.96522 0.313618 8.64229 0.0857539 9.35526 -0.0195312ZM9.9412 1.15234C11.7191 1.24523 12.9886 2.09159 13.7498 3.69141C14.4172 5.66465 13.9419 7.29875 12.324 8.59375C10.7613 9.60922 9.19882 9.60922 7.63651 8.59375C6.07839 7.36922 5.5771 5.80023 6.13261 3.88672C6.84249 2.19353 8.11202 1.28207 9.9412 1.15234Z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M18.4179 19.9814C12.7929 19.9814 7.16793 19.9814 1.54293 19.9814C1.38751 19.9105 1.27683 19.7933 1.2109 19.6299C1.17317 16.8472 2.27343 14.6402 4.51168 13.0088C6.17258 11.925 7.99551 11.4888 9.98043 11.7002C13.4052 11.4106 16.0159 12.7127 17.8125 15.6064C18.5082 16.8589 18.8207 18.2 18.75 19.6299C18.684 19.7933 18.5734 19.9105 18.4179 19.9814ZM8.76949 12.872C9.57688 12.8655 10.3842 12.872 11.1914 12.8916C13.9075 13.0413 15.8541 14.3368 17.0312 16.7783C17.3048 17.4299 17.4806 18.107 17.5586 18.8095C12.5065 18.8095 7.45438 18.8095 2.40231 18.8095C2.75657 16.1579 4.16281 14.3154 6.62106 13.2822C7.32195 13.0353 8.03809 12.8986 8.76949 12.872Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className='min-w-max'>Hamza Şişman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar