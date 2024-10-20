import React from 'react'
import "./styles.scss"
import andaman from "../../images/andaman.jpg"
import { useParams } from 'react-router-dom'
import { tours } from '../../data/pagesdata'

const TourInfo = () => {
    const place = useParams().tourname;
    console.log(place)
    const tourContents = tours.filter(f => f.place === place)[0]
    console.log(tourContents)
    return (
        <div className='tourInfo'>
            <div className="hero">
                <img src={tourContents.img} alt="" className='bg-img' />
                <div className="intro">
                    <span>Tour Plan</span>
                    <h1>{tourContents.place.toUpperCase()} ({tourContents.days} days)</h1>
                </div>
            </div>
            <div className="basic-contents">
                <div className="left">
                    <div className="head">
                        <h1>{tourContents.place} Tour Details</h1>
                    </div>
                    <div className="content">
                        <h2>Places To Cover - </h2>
                        <span>{tourContents.places}</span>
                    </div>
                    <div className="content">
                        <h2>Dates - </h2>
                        <span>{tourContents.dates}</span>
                    </div>
                    <div className="content">
                        <h2>Price - </h2>
                        <span>{tourContents.price}/-</span>
                    </div>

                </div>
                <div className="right">
                    <img src={tourContents.img2} alt="" />
                </div>
            </div>
            {
                tourContents.route ? <div className="route-contents">
                    <h1>Routes and details of tour</h1>
                    <div className="route-table">
                        {
                            tourContents?.route?.map((r) => (
                                <div className="table-contents">
                                    <div className="row-left">
                                        <h2 className='day'>Day {r.day}</h2>
                                    </div>
                                    <div className="row-right">
                                        <span>{r.description}</span>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div> : null
            }

        </div>
    )
}

export default TourInfo
