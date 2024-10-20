import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const ImgCards = ({ data }) => {
    return (
        <div className={data.full ? "img-card-full" : "img-card"} >
            <img src={data.img} alt="" />
            <div className="contents">
                <h3>{data.title}</h3>
                <span>{data.desc}</span>
                <Link onClick={() => scrollTo(0, 0)} to={"/gallery"} className='button'>View More</Link>
            </div>
        </div>
    )
}

export default ImgCards
