import React, { useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import logo from "../../images/kundu-logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from './Menu';


const Header = () => {
    const [menu, setMenu] = useState(false)
    const TransferPage = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='header'>
            <Link className='link' to={"/"} onClick={TransferPage}>Home</Link>
            <Link className='link' to={"/about"} onClick={TransferPage}>About</Link>
            <Link className='link' to={"/tours"} onClick={TransferPage}>Tours</Link>
            <img src={logo} alt="" />
            <Link className='link' to={"/gallery"} onClick={TransferPage}>Gallery</Link>
            <Link className='link' to={"/routes"} onClick={TransferPage}>Routes</Link>
            <Link className='link' to={"/contact"} onClick={TransferPage}>Contact Us</Link>
            <RxHamburgerMenu className='ham' onClick={() => setMenu(true)} />
            {menu ? <Menu setMenu={setMenu} /> : null}
        </div>
    )
}

export default Header
