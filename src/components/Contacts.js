import React from 'react'
import './Contacts.css'

function Contacts() {


    return (
        <div className='login'>
            <div className="login_container">
                <h1>Contact Us</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Contact No" />
                    <input type="email" placeholder="Email" />
                    <input type="adress" placeholder="Adress" />
                    <button type="submit" className="login_signInButton">Sign in</button>
                </form>
                <button className="login_registerButton">create your Amoazon account</button>
            </div>
        </div>

    )
}

export default Contacts
