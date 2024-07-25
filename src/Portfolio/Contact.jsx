import React, { useEffect, useState } from 'react'
import './Contect.css'


export default function Contact() {
    const [data, setData] = useState();
    function SubmitData(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if(name != '' && email != '' && message != '')
        {
            const forData = {
                'name': name,
                'email': email,
                'message': message
            }
            setData(forData);
        }
        else{
            alert('please check all the fields!')
        }
    }

    return (
        <>
            <section className="Contact-me" id="Contact-me">
                <h1> <u>Contact Me</u></h1>
                <div className='ContectItems'>
                    <form id="FormData">
                        <div className='input'>
                            <label htmlFor="name">Name: </label><input type="text" name='name' id='name' placeholder='enter your name' required />
                        </div>
                        <div className='input'>
                            <label htmlFor="email">Email: </label><input type="text" name='email' id='email' placeholder='enter your email' required />
                        </div>
                        <div className='textarea'>
                            <label htmlFor="message">Message: </label><textarea name="message" id="message" cols="30" rows="10" placeholder='enter your message' required ></textarea>
                        </div>
                        <button onClick={SubmitData}>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}
