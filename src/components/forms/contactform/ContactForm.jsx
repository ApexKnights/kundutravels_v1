import React, { useState } from 'react'
import "./styles.scss"
import axios from 'axios';
import { server } from '../../../main';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${server}/contact`, { name, email, message }, { withCredentials: true })
            toast.success("Your Message has been sent successfully")
        } catch (error) {
            toast.error("Something Went Wrong, Try again Later")
        }

    }
    return (
        <div className="contact-form">
            <h1>Contact Us Now</h1>
            <input type="text" placeholder='Give Us Your Name' onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Give Us Your Email' onChange={(e) => setEmail(e.target.value)} />
            <textarea type="text" placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSubmit}>Submit Your Message</button>
        </div>
    )
}

export default ContactForm
