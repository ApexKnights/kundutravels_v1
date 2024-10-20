import React from 'react'
import logo from "../../images/kundu-logo.png"
import { ThreeCircles } from "react-loader-spinner"
import "./styles.scss"


const Loader = () => {
    return (
        <div className='loader'>
            <img src={logo} alt="" />
            {/* <h2>SR KUNDU TRAVELS</h2> */}
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#FEAD08"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader
