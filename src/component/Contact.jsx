import React from 'react'
import Button from '../layout/Button'

const Contact = () => {
    return (
        <section className=' min-h-screen  p-20 bg-[url(../../public/img/contact.jpeg)]'>
            <div className='flex justify-around flex-wrap'>
                <div className="text_part w-[500px] bg-[#2d2d2d] flex flex-col items-center justify-center px-8 py-20 text-white mb-5">
                    <h5 className=' text-xl font-medium text-[#ffffff]'>
                        Hours of Operation

                    </h5>
                    <h1 className='text-lg mt-16'>MON-FRI</h1>
                    <h1 className='text-lg mt-2 '>10:00AM - 1:00PM</h1>
                    <h1 className='text-lg mt-2 '>4:00AM - 10:30PM</h1>
                    <hr className='mt-2  border-2 w-full border-[#FAAB78] ' />
                    <h1 className='text-lg mt-2 '>SAT</h1>

                    <h1 className='text-lg mt-2 '>3:00AM - 10:30PM</h1>
                    <hr className='mt-2  border-2 w-full border-[rgb(250,171,120)]' />

                    <h1 className='text-lg  mt-2'>SUN</h1>

                    <h1 className='text-lg  mt-2'>We are closed</h1>

                    <div className='mt-4 text-xl'>
                        <Button title={"MAKE A RESERVATION"} />
                    </div>
                </div>
                <div className="text_part w-[500px] bg-[#2d2d2d] flex flex-col items-center justify-center px-8 py-20 text-white">
                    <h5 className=' text-xl font-bold text-[#ffffff]'>
                        Drop Us a line
                    </h5>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amett. Eius, harum. Perspiciatis sequi id corrupti,!
                    </p>

                    <div className='mt-4 text-lg'>
                        <Button title={"CONTACT US"} />
                    </div>
                    <h5 className=' text-xl font-bold text-[#ffffff] mt-16'>
                        Our Newsletter
                    </h5>
                    <p className='text-center text-lg text-[#646464] mt-5'>
                        Lorem ipsum dolor Perspiciatis sequi id corrupti,!
                    </p>
                    <input type="text" className='bg-black placeholder:text-white px-3 py-2 mt-3 w-[350px]' placeholder='First Name' />
                    <input type="text" className='bg-black placeholder:text-white px-3 py-2 mt-3 w-[350px]' placeholder='Last Name' />
                    <input type="text" className='bg-black placeholder:text-white px-3 py-2 mt-3 w-[350px]' placeholder='Email' />
                    <div className='mt-4 text-lg bg-[#E6BA95] w-[350px] flex justify-center'>
                        <Button title={"CONTACT US"} />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact