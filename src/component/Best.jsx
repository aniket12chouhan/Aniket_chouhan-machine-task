import React from 'react'
import Button from '../layout/Button'

const Best = () => {
    return (
        <>
            <section className={`min-h-[60vh]  bg-center flex justify-center bg-[#efefef]`}>
                <div className="container h-[60vh] w-[650px] flex  flex-col items-center justify-center  pt-8 pb-2">
                    <h1 className='text-[#c8c8c8] text-2xl font-medium '>ONLY THE BEST </h1>
                    <hr className='mt-2 w-[80px] border-2  border-[#FAAB78]' />
                    <h3 className=' text-4xl mt-5 text-center text-black'>
                        Freah Ingrendient, tasty Meals
                    </h3>
                    <p className='text-center text-[grey] py-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non dolorem id unde assumenda molestias nulla facere tempore pariatur, delectus accusamus omnis sequi corrupti impedit excepturi itaque. Magni, hic sequi.
                    </p>
                    <span>


                        <Button title={"VIEW ITEMS"} />
                    </span>


                </div>

            </section>
        </>
    )
}

export default Best