import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const Menu = ({ setMenu }) => {
    const TransferPage = () => {
        setMenu(false);
        window.scrollTo(0, 0)
    }
    return (
        <div className='menu'>
            <div className="ico">
                <RxCross1 className='cross' onClick={() => setMenu(false)} />
            </div>
            <Link className='link' to={"/"} onClick={TransferPage}>Home</Link>
            <Link className='link' to={"/about"} onClick={TransferPage}>About</Link>
            <Link className='link' to={"/tours"} onClick={TransferPage}>Tours</Link>
            <Link className='link' to={"/gallery"} onClick={TransferPage}>Gallery</Link>
            <Link className='link' to={"/routes"} onClick={TransferPage}>Routes</Link>
            <Link className='link' to={"/contact"} onClick={TransferPage}>Contact Us</Link>
        </div>
    )
}

export default Menu
