import React from 'react'
import "./styles.scss"
import { FaMoneyBillWave } from 'react-icons/fa'

const AboutCards = ({ data }) => {
    return (
        <div className="about-card">
            <img src={data.img} alt="" className='img' />
            <h2>{data.title}</h2>
            <span>{data.desc}</span>
        </div>
    )
}

export default AboutCards
