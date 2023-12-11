import React from 'react'
import card from "../../public/img/card.jpeg"
const ImageCard = () => {
    return (
        <div className="card bg-[#f1f1f1]  w-[350px]">
            <img src={card} alt="" />
            <div className="text p-5">
                <h2 className='text-xl mb-2 '>
                    Nunc Volutpat Venenatis
                </h2>
                <h2 className='text-lg font-medium text-[#FAAB78] mb-2'>
                    CATEGORY
                </h2>
                <p className='text-[#a3a3a3]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum iste reprehenderit libero itaque repellendus deserunt in aliquam qui nobis quae natus a, accusantium alias facilis consectetur dolore inventore nam.
                </p>
            </div>
        </div>
    )
}

export default ImageCard