import React from 'react'
import './LearnMore.css'

function LearnMore() {
    return (

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                        <div className="titlemargin">
                            <h2 className="strong">
                                <stong style={{ color: "#6C63FF" }}>Mero Sathi</stong> at your<br></br><div className="title">Service</div></h2>
                            <div className="sub-title">
                                <p className="second">With eight of the world's highest With eight of the world's highest With eight of the world's highest
                                </p>
                            </div>
                            <button type="button" className="btn btn-primary white" style={{ backgroundColor: '#6C63FF' }} >Get started</button>
                            <button type="button" className="btn btn-light" style={{ border: "1.5px solid #B7B3B3" }}>Learn more</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <img className="heroimage" src="/images/2.png" alt="..."></img>
                        {/* image */}
                    </div>
                </div>

            </div>
        </section>

    )
}

export default LearnMore
