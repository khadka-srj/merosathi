import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <section>
            <div className="container">
                <div className="row ">
                    <div className="gap col-md-3 col-sm-6 col-xs-6 ">
                        <div className="list-unstyled">
                            <h4 className="hfour" style={{ color: "#6C63FF" }}><strong>Mero Sathi</strong></h4>
                            <p style={{ marginBottom: "4px" }}>lflnlknflknlanlkn</p>
                        </div>
                    </div>
                    <div className=" gap col-md-3 col-sm-6 col-xs-6">
                        <div className="list-unstyled">
                            <li className="margin">Home</li>
                            <li className="margin">Services</li>
                            <li className="margin">About Us</li>
                            <li className="margin">Contact Us</li>
                        </div>
                    </div>
                    <div className=" gap col-md-3 col-sm-6 col-xs-6">
                        <div className="list-unstyled">
                            <li className="margin">options</li>
                            <li className="margin">options</li>
                            <li className="margin">options</li>
                        </div>
                    </div>
                    <div className=" gap col-md-3 col-sm-6 col-xs-6">
                        <div className="list-unstyled">
                            <li className="margin">options</li>
                            <li className="margin">options</li>
                            <li className="margin">options</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer
