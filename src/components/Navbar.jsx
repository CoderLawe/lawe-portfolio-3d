import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const[active, setActive] = useState("");
  const[toggled, setToggled] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className='flex items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0,0)}}>
              <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
              <p className="text-white text-[18px] font-bold cursor-pointer flex">Lawe <span className="sm:block hidden ml-[4px]"> Sosah</span></p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">{navLinks.map((link) => (
              // Remember this
                <li key={link.id} onClick={() => {setActive(link.title); setToggled(!toggled)}}className={`${active === link.title ? "text-white" :"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}</ul>

            {/* Mobile navbar */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggled ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggled(!toggled)}/>

                <div className={`${!toggled ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[10] rounded-xl `}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">{navLinks.map((link) => (
              // Remember this
                <li key={link.id} onClick={() => setActive(link.title)}className={`${active === link.title ? "text-white" :"text-secondary"} hover:text-white text-[18px] font-poppins font-medium text-[16px] cursor-pointer`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}</ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar