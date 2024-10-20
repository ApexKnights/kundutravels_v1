import React, { useState } from 'react'
import "./styles.scss"
import { tours } from '../../../data/pagesdata'
import toast from 'react-hot-toast';
import axios from "axios"
import { server } from '../../../main';

const TourForm = () => {
    const tour = tours.map((e) => e.place);
    console.log(tour)
    const [tourname, setTourName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const handleFormSubmit = async () => {
        // console.log(tourname, email, name, phone)
        try {
            const res = await axios.post(`${server}/tourenquiry`, {
                name,
                email,
                phone,
                tourname
            }, { withCredentials: true })
            toast.success("Message Has been sent successfully")
        } catch (error) {
            toast.error("Message Has not sent, try again later")
        }
    }
    return (
        <div className="form-container">
            <h1>Tour Enquiry</h1>
            <div className="form">
                <select name="Select Tour" id="" onChange={(e) => setTourName(e.target.value)}>
                    <option value="select">Select Tour</option>
                    {
                        tour.map((e, index) => (
                            <option key={index} value={e} >{e}</option>
                        ))
                    }
                </select>
                <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder='Enter Your Phone Number' onChange={(e) => setPhone(e.target.value)} />
                <button onClick={handleFormSubmit}>Submit</button>
            </div>
            <h3>Or</h3>
            <a href="https://wa.me/919433221221">WhatsApp</a>
        </div>
    )
}

export default TourForm
