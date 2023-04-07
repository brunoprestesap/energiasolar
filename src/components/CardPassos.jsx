import React from 'react'

const CardPassos = ({ step, title, desc }) => {
  return (
    <div className='p-5 flex flex-col items-center justify-center'>
        <div className='w-12 h-12 flex justify-center items-center p-5 rounded-full bg-[#277BC0]'>
            <p className='text-white text-2xl font-bold'>{step}</p>
        </div>
        <div className='text-center my-3 w-60'>
            <h2 className='font-bold text-xl'>
                {title}
            </h2>
            <p className='text-sm'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default CardPassos