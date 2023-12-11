import React from 'react'
import second from '../../public/img/second.jpeg'

const Story = () => {
    return (
        <>
            <section className=' min-h-screen p-40 '>
                <div className='flex justify-around flex-wrap'>
                    <div className="text_part w-[500px]">
                        <h5 className=' text-lg font-medium text-[#bababa]'>
                            OUR STORY
                            <hr className='mt-1 w-[40px] border-2  border-[#FAAB78]' />
                        </h5>
                        <h1 className='text-4xl my-8 '>Welcome To Royal</h1>
                        <p className='my-4 text-[#bababa]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repellat ipsum, consectetur voluptas, ea voluptatum hic vitae reiciendis temporibus porro suscipit ad. Nobis dicta nulla nisi libero sequi harum maiores eligendi accusamus. Qui accusantium nostrum ipsum praesentium laudantium facere ea, quas quibusdam ipsam fuga mollitia quis aliquam hic! Exercitationem illo beatae esse quidem rem laudantium possimus tempora, adipisci necessitatibus recusandae?
                        </p>

                        <p className='text-[#bababa]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore eveniet dignissimos sed facilis incidunt quidem quasi. Tempora, praesentium repellat ipsum sapiente assumenda mollitia alias libero eaque voluptate sed natus quod voluptas iure pariatur cumque maxime cum ad debitis at quaerat et dolores, nobis impedit? Quam incidunt repudiandae tempora quisquam et modi quidem error? Dolores repellendus vitae magnam cum iste vero quibusdam doloribus nam. Quos consequuntur, animi harum, natus quis voluptatem odit ex beatae quo assumenda, corrupti quod inventore saepe. Amet nesciunt omnis aperiam voluptatum quidem dolore ad! Repellat cumque, enim alias, deleniti necessitatibus natus modi quaerat quas voluptates vitae optio.
                        </p>
                    </div>
                    <div className='w-[500px] '>
                        <img className='w-full' src={second} alt="" />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Story