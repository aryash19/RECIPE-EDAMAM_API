import React, { useState } from 'react'
import Logo from "../images/logo.png"
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <header className='w-full fixed z-10 bg-black'>
      <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
        <a href='/' className='flex items-center justify-center text-white text-lg cursor-pointer' >
          <img src={Logo} alt="Logo"/>
          flavor<span>Verse</span>

        </a>
      </nav>
    </header>
  )
}

export default Navbar