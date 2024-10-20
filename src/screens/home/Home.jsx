import React, { lazy } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import herobg from "../../images/hero-bg.mp4";
import cardimg from "../../images/homegallery1.jpeg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { aboutsection, consultsection, herosection, imgcards } from '../../data/homedata';
import ImgCards from '../../components/cards/imgCards/ImgCards';
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import TourForm from '../../components/forms/tourform/TourForm';





const Home = () => {
    return (
        <div className='home'>
            <div className="socials">
                <a href="https://www.facebook.com/srkundutravel"> <FaFacebook className='sco-icon' /></a>
                <RiInstagramFill className='sco-icon' />
                <a href="https://wa.me/919433221221"><IoLogoWhatsapp className='sco-icon' /></a>
            </div>
            <div className="hero">
                <video onLoad={lazy} className='vid-bg' id="background-video" autoPlay preload='true' loop muted >
                    <source onLoad={lazy} src={herobg} type="video/mp4" />
                </video>
                <div className="hero-contents">
                    <h1>{herosection.title.slice(0, 10)}<br />{herosection.title.slice(10, 28)}</h1>
                    <p>{herosection.desc} </p>
                    <Link to={"/tours"} className='button'>Explore Packages</Link>
                </div>
            </div>
            <div className="gallery-section">
                <h1>Our Gallery</h1>
                <div className="img-sec1">
                    {
                        imgcards.map((data) => (
                            <ImgCards data={data} key={data.id} />
                        )).slice(0, 3)
                    }
                </div>
                <div className="img-sec2">
                    {
                        imgcards.map((data) => (
                            <ImgCards data={data} key={data.id} />
                        )).slice(3, 4)
                    }
                </div>
                <div className='butt-sec'>
                    <Link to={"/gallery"} className='button'>Explore Gallery</Link>
                </div>
            </div>
            <div className="about-sec">
                <div className="left">
                    <h2>{aboutsection.title}</h2>
                    <span className='sub-head'>{aboutsection.desc}</span>
                    <div className="whyus">
                        <h3>{aboutsection.whyus}</h3>
                        <div className="whyus-detail">
                            <FaMoneyBillWave className='icon' />
                            <p>{aboutsection.pricedetail}</p>
                        </div>
                        <div className="whyus-detail">
                            <BiSolidHappyBeaming className='icon' />
                            <p>{aboutsection.customerdetail}</p>
                        </div>
                        <div className="whyus-detail">
                            <FaMapLocationDot className='icon' />
                            <p>{aboutsection.tourdetail}</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={cardimg} alt="" />
                </div>
            </div>
            <div className="consult-section">
                <div className="left">
                    <h1>{consultsection.title}</h1>
                    <p>{consultsection.desc}</p>
                    <Link to={"/tours"} className='link'>Explore Tours and Packages</Link>
                </div>
                <div className="right">
                    <TourForm />
                </div>
            </div>
            <div className="contactus">
                <div className="left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14748.85995933104!2d87.9710739!3d22.4585539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029a5676325f97%3A0x7c6fe5329043c6eb!2sKundu%20Travel!5e0!3m2!1sen!2sin!4v1727776697330!5m2!1sen!2sin" className='kundu-map'></iframe>
                </div>
                <div className="right">
                    <div className="head">
                        <span>Kundu Travels</span>
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-info">
                        <div className="info">
                            <IoMdCall className='info-icon' />
                            <p>9433661661</p>
                        </div>
                        <div className="info">
                            <IoIosMail className='info-icon' />
                            <p>srkundutravel@yahoo.com</p>
                        </div>
                        <div className="info">
                            <IoLogoWhatsapp className='info-icon' />
                            <p>9433221221</p>
                        </div>
                        <div className="info">
                            <FaAddressBook className='info-icon' />
                            <p>Khalor, Bagnan, 711003,<br /> Howrah, West Bengal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
