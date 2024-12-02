import React, { useState } from 'react'
import "./styles.scss"
import { tours } from '../../../data/pagesdata'
import toast from 'react-hot-toast';
import axios from "axios"
import { server } from '../../../main';
import { ThreeCircles } from 'react-loader-spinner';

const TourForm = () => {
    const [loading, setLoading] = useState(false)
    const tour = tours.map((e) => e.place);
    console.log(tour)
    const [tourname, setTourName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const handleFormSubmit = async () => {
        // console.log(tourname, email, name, phone)
        try {
            setLoading(true)
            const res = await axios.post(`${server}/tourenquiry`, {
                name,
                email,
                phone,
                tourname
            }, { withCredentials: true })
            toast.success("Message Has been sent successfully")
            setLoading(false)
        } catch (error) {
            toast.error("Message Has not sent, try again later")
            setLoading(false)
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
                {loading ? <ThreeCircles
                    visible={true}
                    height="40"
                    width="40"
                    color="#FEAD08"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> : <button onClick={handleFormSubmit}>Submit</button>}
            </div>
            <h3>Or</h3>
            <a href="https://wa.me/919433221221">WhatsApp</a>
        </div>
    )
}

export default TourForm
