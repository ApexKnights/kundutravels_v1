import React from 'react'
import "./styles.scss"
import routeimg from "../../images/route-img.jpg"
import { tours } from '../../data/pagesdata'

const TourRoutes = () => {
    const routedtours = tours.filter((t) => t.route)
    console.log(routedtours)
    return (
        <div className='routes'>
            <div className="hero">
                <div className="intro">
                    <span>SR KUNDU TRAVELS</span>
                    <h1>TOUR ROUTES</h1>
                </div>
            </div>
            <div className="routes-body">
                <h1>Explore different routes and tour plans of available tours</h1>
                <div className="route">
                    {
                        routedtours.map((r) => (
                            <div className="tour">
                                <div className="upper">
                                    <img src={r.img} alt="" />
                                    <h3>{r.place} Tour Plan And Routes</h3>
                                </div>
                                <div className="lower">
                                    {
                                        r?.route?.map((e) => (
                                            <div className="table-contents">
                                                <div className="row-left">
                                                    <h2 className='day'>Day -{e.day}</h2>
                                                </div>
                                                <div className="row-right">
                                                    <span>{e.description}</span>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TourRoutes
