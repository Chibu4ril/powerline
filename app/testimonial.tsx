import React from 'react'

export const Testimonial = () => {
  return (
    <div className='bg-white'>

      <div className='container mx-auto py-20 px-5 xl:px-40'>
        <div className='text-center'>
          <h3 className=' leading-[45px] text-4xl mb-5 xl:w-2/3 mx-auto '>
          Power Line Electrical Company <br /> revolutionized our power infrastructure. Outstanding service!
          </h3>
          <div className='flex justify-center flex-col items-center'>
            <img src="/awo.jpg" width={200} alt="" className='border-4 border-green-500 rounded-full' />
            <div className='mt-3'>
              <p className='text-gray-400 font-semibold'>OGECHI MICHEAL</p>
              <p>Head of Operations

</p>
            </div>
          </div>
        </div>


        <div className='mt-40 lg:grid grid-flow-col flex flex-col-reverse bg-gray-100'>

          

          <div className='' >
            <img src="/meet.jpg" width={600} className='w-full object-fill h-full' alt="" />
          </div>

          <div className='xl:p-16 p-8 '>

            <h3 className='leading-[45px] font-semibold text-4xl '>
            EMPOWERING RELIABLE POWER SOLUTIONS


            </h3>
            <p className=' leading-[]  xl:w-5/6 mt-3'>
            Unlock efficiency with our tailored electrical services. See how we ensure a stable power supply. Connect with us today!</p>
          
          
          <div className='lg:flex items-center gap-5 mt-16'>
          <button className='btn border-green-500  w-full lg:w-auto  rounded-sm uppercase text-green-500  hover:text-black'>
          Learn More</button>
            <button className='btn bg-green-500  w-full  rounded-sm uppercase text-white btn-wide mt-5 xl:mt-0'>
            Get In Touch
          </button>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}
