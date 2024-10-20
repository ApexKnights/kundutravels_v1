import React from 'react'
import "./styles.scss"
import TourCards from '../../components/cards/tourCards/TourCards'
import { tours } from '../../data/pagesdata'


const Tours = () => {
    return (
        <div className='tours'>
            <div className="hero">
                <div className="intro">
                    <span>TRIPS & PACKAGES</span>
                    <h1>OUR TOURS</h1>
                </div>
            </div>
            <div className="tour-section1">
                <div className="head">
                    <h1>EXPLORE OUR TOUR PLANS</h1>
                </div>
                <div className="tourcards">
                    {
                        tours.map((tour) => (
                            <TourCards key={tour.id} tour={tour} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Tours
