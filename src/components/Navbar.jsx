import React from 'react'
import { FaSolarPanel, FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='p-5 bg-white flex items-center justify-items-center justify-between'>
      <div className='flex items-center justify-items-center'>
        <FaSolarPanel size={50} color='277BC0'/>
        <h1 className='font-black mx-2 text-xl text-[#277BC0]'>Energia</h1>
      </div>
      <div>
        <FaBars size={25} color='277BC0' />
      </div>
    </div>
  )
}

export default Navbar