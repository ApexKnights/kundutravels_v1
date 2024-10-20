import React from 'react'
import "./styles.scss"
import aboutintro from "../../images/homegallery3.jpeg"
import AboutCards from '../../components/cards/aboutCards/AboutCards';
import { aboutCards } from '../../data/pagesdata';


const About = () => {
    return (
        <div className='about'>
            <div className="hero">
                <div className="intro">
                    <span>SR KUNDU TRAVEL</span>
                    <h1>ABOUT US</h1>
                </div>
            </div>
            <div className="section1">
                <div className="left">
                    <div className="head">
                        <span>About Us</span>
                        <h1>Introduction</h1>
                    </div>
                    <p className='intro-para'>Welcome to SR Kundu Travel, your trusted travel partner based in Bagnan, Howrah, West Bengal. With a passion for curating exceptional travel experiences, we specialize in offering customized tour packages across India, tailored to meet the unique preferences of every traveler. Whether you're planning a serene getaway to the Andaman Islands, a thrilling journey through the Silk Route, or a peaceful retreat to the Himalayas, SR Kundu Travel is here to make your travel dreams come true.
                    </p>
                </div>
                <div className="right">
                    <img src={aboutintro} alt="" />
                </div>
            </div>
            <div className="section2">
                <div className="head-why-us">
                    <span>OUR APPROACH</span>
                    <h1>WHY US ?</h1>
                </div>
                <div className="about-cards">
                    {
                        aboutCards.map((data) => (
                            <AboutCards key={data.id} data={data} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default About
