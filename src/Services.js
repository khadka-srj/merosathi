import React from 'react'
import './Services.css'

function Services() {
    return (
        <section >
            <div className="container">

                <h2 className="headers"
                ><strong>Services We Provide</strong></h2>
                <p className="paragraph" >kjaljofjanfaiojialajoi</p>
                <div className="row ">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        {/* image */}
                        <div className="service-block">
                            <img src="/images/plumber 2.png" className="card-img-top" alt="..."></img>
                            <h5 className="img-buttomn"
                            >Plumber</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        {/* image */}
                        <div className="service-block">
                            <img src="/images/carpenter.png" className="card-img-top" alt="..."></img>
                            <h5 className="img-buttomn"
                            >Carpenter</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        {/* image */}
                        <div className="service-block">

                            <img src="/images/electricity.png" className="card-img-top" alt="..."></img>
                            <h5 className="img-buttomn"
                            >Electrician</h5>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4 col-xs-12">
                        {/* image */}
                        <div className="service-block">
                            <img src="/images/painter.png" className="card-img-top " alt="..."></img>
                            <h5 className="img-buttomn painter"
                            >Painter</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        {/* image */}
                        <div className="service-block">
                            <img src="/images/painters.png" className="card-img-top " alt="..."></img>
                            <h5 className="img-buttomn"
                            >Naksha Developer</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services
