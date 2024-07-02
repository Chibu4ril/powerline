import React from 'react'

const Hero = () => {
  return (
    <div><div className='container mx-auto px-5 xl:px-20 py-20'>
      <div className="lg:grid grid-flow-col grid-cols-3 gap-12 ">
        <div className='bg-white  col-span-2'>
          <img src="/trt.jpg" className='w-full object-fill' alt="" />
        </div>
        <div className='bg-white p-10'>
          <h2 className='text-4xl leading-[70px] font-semibold mb-5'>
          EMPOWERING YOUR ELECTRICAL FUTURE
          </h2>
          <p className='leading-[30px]'>
          Experience unmatched success with our tailored electrical solutions designed to elevate your power infrastructure. Discover the impact of customized strategies by industry professionals, ensuring reliable growth and a competitive edge in Nigeria’s power sector.
          </p>

          <button className='btn bg-green-500 mt-6 rounded-sm uppercase text-white btn-wide'>
            Get In Touch
          </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Hero