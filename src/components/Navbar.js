import React from 'react'
import { FaInstagramSquare, FaCentercode} from 'react-icons/fa';
import { BsGithub} from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/gi'
import "./navbar.css"
import { useState } from 'react';
const Navbar = () => {
    const [mediaIcons, setmediaIcons] = useState(false)

  return (
    <>
    <nav className="navbar">
        {/* titlename*/}
        <div className="logo">
            <h2>
                <span>S</span>ufiyan <span>S</span>haikh
            </h2>
        </div>
        {/* pages */}
        <div className= {mediaIcons ? "pages mobile-pages": "pages"}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Work">Work</a>
                </li>
                <li>
                    <a href="/Contact">contact</a>
                </li>
            </ul>
        </div>
        {/* socialmedia links */}
        <div className="social-media">
            <ul className="smd">
                <li>
                    <a href="https://github.com/Sufiyan11919" target="_blank">
                    <BsGithub className='gh'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_traveller_98__/" target="_blank">
                    <FaInstagramSquare className='ig'/>
                    </a>
                </li>
                <li>
                    <a href="https://leetcode.com/sufiyan11919/" target="_blank">
                    <FaCentercode className='lc'/>
                    </a>
                </li>
            </ul>
            {/* hamburger menu */}
            <div className="hamburger">
                <a href="#" onClick={()=> setmediaIcons(!mediaIcons)}>
                    <GiHamburgerMenu/>
                </a> 
            </div>
        </div>

    </nav>

    </>
  )
}

export default Navbar


// FaFacebookSquare,