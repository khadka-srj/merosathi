import React from 'react'
import './Why.css'

function Why() {
    return (
        <section>
            <div className="why">
                <h2><div className="line">Why Mero Sathi ?</div></h2>
            </div>
            <div className="container" >
                <div className="row">
                    <div style={{ padding: "5%" }} className="col-sm-12 col-md-6">
                        <div className="option">
                            <img className="reliable" src="/images/Quality.png" alt="" />
                            <div className="message">
                                <h3 className="hthree">Quality</h3>
                                <p>ooooeojiej</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "5%" }} className="col-md-6 col-sm-12">
                        <div className="option">
                            <img className="reliable" src="/images/Reliable.png" alt="" />
                            <div className="message">
                                <h3 className="hthree">Reliable</h3>
                                <p>ooooeojiej</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div style={{ padding: "5%" }} className="col-sm-12 col-md-6">
                        <div className="option">
                            <img className="reliable" src="/images/Risk.png" alt="" />
                            <div className="message">
                                <h3 className="hthree">Cost Effective</h3>
                                <p>ooooeojiej</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "5%" }} className="col-sm-12 col-md-6">
                        <div className="option">
                            <img className="reliable" src="/images/Timely service.png" alt="" />
                            <div className="message">
                                <h3 className="hthree">Timely</h3>
                                <p>ooooeojiej</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Why
