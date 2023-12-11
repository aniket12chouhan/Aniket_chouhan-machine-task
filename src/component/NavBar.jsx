import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
    return (
        <>
            <nav className='flex md:px-14 px-5 py-6 justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <h1 className=' text-2xl font-medium'>Restaurant  Page</h1>
                <span className='flex justify-center'>
                    <ul className='hidden md:flex justify-between font-normal items-center w-[600px]  '>
                        <li>Landing</li>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                        <FaShoppingCart />
                    </ul>
                    <div className='md:hidden flex'>
                        <IoMdMenu />
                    </div>
                </span>

            </nav>
        </>

    )
}

export default NavBar