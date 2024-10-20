import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import logo from "../../images/kundu-logo.png"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='footer'>
            <div className="footer1">
                <div className="info1">
                    <img src={logo} alt="" />
                    <p>SR Kundu Travel – Your trusted travel partner based in Bagnan, West Bengal. Specializing in customized travel experiences across India, we make every journey memorable and hassle-free.</p>
                </div>
                <div className="info2">
                    <Link className='link' onClick={scrollToTop} to={"/"}>Home</Link>
                    <Link className='link' onClick={scrollToTop} to={"/tours"}>Tours</Link>
                    <Link className='link' onClick={scrollToTop} to={"/routes"}>Routes</Link>
                    <Link className='link' onClick={scrollToTop} to={"/gallery"}>Gallery</Link>
                </div>
                <div className="contact">
                    <h2>Contact Now</h2>
                    <span>9433221221/ 9433661661</span>
                    <span>srkundutravel@yahoo.com</span>
                    <span>Bagnan College Road, Howrah, West Bengal , 711303</span>
                </div>
            </div>
            <div className="footer2">
                <span>Designed and developed by SouparnoShee | All Copyright Reserved © 2024</span>
            </div>
        </div>
    )
}

export default Footer
