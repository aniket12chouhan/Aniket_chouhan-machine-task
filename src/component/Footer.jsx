import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { MdOutlineNetworkWifi } from "react-icons/md";

const Footer = () => {
    return (
        <footer className=' w-full bg-black text-[#6e6e6e] flex flex-wrap justify-between sm:px-40 p-5 px-1'>
            <div className="text flex w-[400px] mb-2">
                Designed by <span className='text-[#3b3b3b]'>Elegent themes</span> | Powered by <span className='text-[#3b3b3b]'>WordPress</span>
            </div>
            <div className='flex gap-4 text-2xl'>
                <FaFacebookF />
                <FaTwitter />
                <FaGooglePlusG />
                <MdOutlineNetworkWifi />
            </div>

        </footer>
    )
}

export default Footer