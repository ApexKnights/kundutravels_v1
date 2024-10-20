import React from 'react'
import "./styles.scss"
import TourForm from '../../components/forms/tourform/TourForm'
import ContactForm from '../../components/forms/contactform/ContactForm'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-hero">
                <div className="left">
                    <div className="head">
                        <span>SR Kundu Travels</span>
                        <h1>Contact Us</h1>
                    </div>
                    <div className="contact-shorts">
                        <div className="basics">
                            <span>9433661661</span>
                        </div>
                        <div className="basics">
                            <span>srkundutravel@yahoo.com</span>
                        </div>
                    </div>
                    <div className="contact-para">
                        <p>At SR Kundu Travel, customer satisfaction is our top priority. We pride ourselves on our personalized service, attention to detail, and ability to create the perfect holiday experience for families, solo travelers, and groups alike. From exotic beach vacations to mountain treks and cultural tours, we have something for every kind of traveler.</p>
                    </div>
                </div>
                <div className="right">
                    <ContactForm />
                </div>
            </div>
            {/* <div className="tour-contact">
                <div className="left"><TourForm /></div>
                <div className="right">

                </div>
            </div> */}

        </div>
    )
}

export default Contact
