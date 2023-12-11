import React from 'react'
import ImageCard from '../layout/ImageCard'
import Button from '../layout/Button'


const NewsEvent = () => {
    return (
        <section className={`min-h-[100vh]  bg-center flex  flex-col items-center justify-center bg-[#efefef] py-8`}>
            <div className="container h-[40vh] md:w-[650px] w-full flex  flex-col items-center justify-center  pt-8 pb-2 ">
                <h1 className='text-[#c8c8c8] text-2xl font-medium '>DON'T MISS </h1>
                <hr className='mt-2 w-[80px] border-2  border-[#FAAB78]' />
                <h3 className=' text-4xl mt-5 text-center text-black'>
                    Our News And Events
                </h3>

                <h5 className=' text-center text-[#949494] mt-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, neque? Repellat dolores accusamus</h5>


            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                <ImageCard />
                <ImageCard />
                <ImageCard />

            </div>

            <div className='my-16'>
                <Button title={"READ MORE"} />
            </div>


        </section>
    )
}

export default NewsEvent