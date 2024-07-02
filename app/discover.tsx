import React from 'react'

export const Discover = () => {
  return (
    <div className='bg-white'>

      <div className='container mx-auto py-20 px-5 xl:px-40'>
        <div className='text-center'>
          <h3 className=' leading-[45px] font-semibold text-4xl mb-5 xl:w-1/2 mx-auto '>
          DISCOVER OUR EXPERT ELECTRICAL SERVICES FOR RELIABLE POWER
          </h3>
          <p className='w-2/3 mx-auto  leading-[30px]'>
          Welcome to Power Line Electrical Company, your trusted partner in electrical solutions. Based in Nigeria, we specialize in the manufacturing of electric poles, and installation and maintenance of solar panels and other electrical equipment. Ensure a stable power supply with our expert services.
          </p>
        </div>


        <div className='mt-40 lg:grid grid-flow-col gap-12 flex flex-col-reverse'>
          <div>
            <h3 className='leading-[45px] font-semibold text-4xl '>
            POWERING NIGERIA’S FUTURE

            </h3>
            <p className=' leading-[]  xl:w-5/6 mt-3'>
            Our top-tier services ensure over 95% client satisfaction, reflecting our commitment to excellence and reliability.
            </p>
          </div>

          <div className='grid gap-8 grid-cols-2' >
            <div className='bg-gray-100 text-center px-12 py-6'>
              <p className='font-bold text-4xl text-green-500'>98%</p>
              <p className='font-bold mt-3'>CLIENT TRUST</p>
            </div>
            <div className='bg-gray-100 text-center px-2 py-6'>
              <p className='font-bold text-4xl text-green-500'>200+</p>
              <p className='font-bold mt-3'>INNOVATIVE SOLUTIONS
              </p>
            </div>
            <div className='bg-gray-100 text-center px-2 py-6'>
              <p className='font-bold text-4xl text-green-500'>5000+</p>
              <p className='font-bold mt-3'>INDUSTRY EXPERTISE
              </p>
            </div>
            <div className='bg-gray-100 text-center px-12 py-6'>
              <p className='font-bold text-4xl text-green-500'>15+</p>
              <p className='font-bold mt-3'>CLIENT SUCCESS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
