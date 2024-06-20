import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between  items-center   gap-8 '>
        {/* text */}
        <div className='md:w-1/2'>
          <h2 className='md:text-5xl'>Dive into Delights of Delectable</h2>
        </div>
        {/* image */}
        <div className='md:w-1/2'>Right</div>
      </div>
    </div>
  )
}

export default Banner