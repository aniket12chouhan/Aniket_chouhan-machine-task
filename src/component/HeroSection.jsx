import React from 'react'
import Button from '../layout/Button'
import { FaArrowDown } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <>
            <section className={`min-h-[80vh] bg-[url(../../public/img/hero.jpeg)] bg-center flex justify-center`}>
                <div className="container h-[80vh] w-[650px] flex  flex-col items-center justify-around pt-8 pb-2">
                    <h1 className='text-white md:text-6xl text-4xl font-bold '>Only Quality Food</h1>
                    <h3 className=' text-2xl text-center text-[#d5d5d5]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis expedita odio distinctio, laboriosam eveniet sunt voluptas deleniti id magnam esse nisi illo praesentium tempora veniam nostrum similique voluptatum tempore?
                    </h3>
                    <span>
                        <button className='px-3 py-[6px] border-2 border-white text-white me-5'>
                            VIEW MENU
                        </button>

                        <Button title={"RESERVATION"} />
                    </span>
                    <div className=' text-4xl font-light text-white'>
                        <FaArrowDown />
                    </div>

                </div>

            </section>
        </>
    )
}

export default HeroSection