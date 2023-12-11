import React from 'react'
import { IoIosStar } from "react-icons/io";

const Testimonials = () => {
    return (
        <section className={`min-h-[60vh]  bg-center flex  flex-col items-center justify-center bg-[#efefef]`}>
            <div className="container h-[20vh] md:w-[650px]  flex  flex-col items-center justify-center  pt-8 pb-2">
                <h1 className='text-[#c8c8c8] text-2xl font-medium '>TESTIMONIALS </h1>
                <hr className='mt-2 w-[80px] border-2  border-[#FAAB78]' />
                <h3 className=' text-4xl mt-5 text-center text-black'>
                    What Peaple are Saving
                </h3>

            </div>
            <div className='flex justify-center flex-wrap gap-1'>
                <div className="rating w-[300px]  p-5">
                    <span className='text-[#da7531] w-full flex gap-3 text-2xl py-5'>

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                    </span>
                    <h1 className='text-2xl'>"A Great find"</h1>
                    <p className='text-[#979797] mb-2'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti eum maxime qui quia vitae! Hic cum iste ducimus laboriosam repellat! Incidunt fuga mollitia quisquam aut non deserunt possimus vel."
                    </p>
                    <h5 className='text-xl'>
                        Divi
                    </h5>
                </div>
                <div className="rating w-[300px] p-5">
                    <span className='text-[#da7531] w-full flex gap-3 text-2xl py-5'>

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                    </span>
                    <h1 className='text-2xl'>"A Great find"</h1>
                    <p className='text-[#979797] mb-2'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti eum maxime qui quia vitae! Hic cum iste ducimus laboriosam repellat! Incidunt fuga mollitia quisquam aut non deserunt possimus vel."
                    </p>
                    <h5 className='text-xl'>
                        Divi
                    </h5>
                </div>
                <div className="rating w-[300px]  p-5">
                    <span className='text-[#da7531] w-full flex gap-3 text-2xl py-5'>

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                    </span>
                    <h1 className='text-2xl'>"A Great find"</h1>
                    <p className='text-[#979797] mb-2'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti eum maxime qui quia vitae! Hic cum iste ducimus laboriosam repellat! Incidunt fuga mollitia quisquam aut non deserunt possimus vel."
                    </p>
                    <h5 className='text-xl'>
                        Divi
                    </h5>
                </div>
                <div className="rating w-[300px]  p-5">
                    <span className='text-[#da7531] w-full flex gap-3 text-2xl py-5'>

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />

                    </span>
                    <h1 className='text-2xl'>"A Great find"</h1>
                    <p className='text-[#979797] mb-2'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti eum maxime qui quia vitae! Hic cum iste ducimus laboriosam repellat! Incidunt fuga mollitia quisquam aut non deserunt possimus vel."
                    </p>
                    <h5 className='text-xl'>
                        Divi
                    </h5>
                </div>

            </div>

        </section>
    )
}

export default Testimonials