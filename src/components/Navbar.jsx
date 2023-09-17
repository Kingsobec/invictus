import React from 'react'
import { logo } from '../assets'

const Navbar = () => {
  const nickname = "Oracle"
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <p className="">{nickname}</p>
      <img src={logo} alt="Rx Logo" className='h-[50px]'/>
      <img src={logo} alt={``} className='h-[50px]'/>
    </div>
  )
}

export default Navbar