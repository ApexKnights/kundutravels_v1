import React from 'react'
import "./styles.scss"
import darjeeling from "../../../images/consult.jpg"
import { Link } from 'react-router-dom'

const TourCards = ({ tour }) => {
    return (
        <div className="tourcard">

            <div className="img-sec">
                <img src={tour.img} alt="" />
                <div className="contents">
                    <span>Tour Plan</span>
                    <h1>{tour.place}</h1>
                </div>
            </div>

            <div className="detail-sec">
                <div className="days">
                    <h3>Days - {tour.days} days</h3>
                </div>
                <div className="places">
                    <h3>Places to Cover - </h3>
                    <span>{tour.places}</span>
                </div>
                <div className="dates">
                    <h3>Dates - </h3>
                    <span>{tour.dates}</span>
                </div>
                <div className="price">
                    <h3>Tour Price- {tour.price}/-</h3>
                </div>
                <div className="buttons">
                    <Link className='button' onClick={() => window.scrollTo(0, 0)} to={`/tour/${tour.place}`}>View details & Routes</Link>
                    <Link onClick={() => scrollTo(0, 0)} to={"/contact"} className='button'>Enquiry</Link>
                </div>
            </div>
        </div>
    )
}

export default TourCards
