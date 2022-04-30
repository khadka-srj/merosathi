import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import './Contact.css'

function Contact() {
    return (
        <section className="contactmargin" style={{ background: 'url("/images/1.svg")' }}>
            <div className="container">
                <div className="container-center">
                    <div className="text-center">
                        <div className="line1"><h3 style={{ color: "white" }}>Contact US</h3></div>
                        <form className="row1">
                            <div className="row padding ">
                                <div className="col-sm-12 col-md-6">
                                    <div className="space">

                                        <input type="name" placeholder="Name" className="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input type="Contact" placeholder="Contact No" className="form-control" id="inputContact" />
                                </div>
                            </div>
                            <div className="row padding">
                                <div className="col-sm-12 col-md-6">
                                    <div className="space">
                                        <input type="email" placeholder="Enter email" className="form-control" id="inputEmail4" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input type="adress" placeholder="Address" className="form-control" id="inputAddress" />
                                </div>
                            </div>
                            <ReactBootStrap.Form >
                                <ReactBootStrap.Form.Group controlId="formGridChoose">
                                    <ReactBootStrap.Form.Control className="half" as="select" defaultValue="Select Service">
                                        <option>Select Service</option>
                                        <option>...</option>
                                    </ReactBootStrap.Form.Control>
                                </ReactBootStrap.Form.Group>
                                <div class="form-outline">
                                    <textarea class="form-control" placeholder="Write Your Message" id="textAreaExample" rows="4"></textarea>
                                </div>


                            </ReactBootStrap.Form>
                        </form>
                        <ReactBootStrap.Button className="btn submit btn-light" type="submit">
                            Submit
                        </ReactBootStrap.Button>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
