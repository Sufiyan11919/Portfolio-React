import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaCentercode} from 'react-icons/fa' ;
import "./navbar.css"
const Navbar = () => {
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
        <div className="pages">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">services</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </div>
        {/* socialmedia links */}
        <div className="social-media">
            <ul className="smd">
                <li>
                    <a href="" target="_blank">
                    <FaFacebookSquare className='fb'/>
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
        </div>

    </nav>
    {/* hero */}
    <section>
        <h1>about me</h1>
    </section>
    </>
  )
}

export default Navbar