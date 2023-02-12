import React from 'react'
import "./_ExhebitionElementor.scss"
import exhebition from "../../../media/shuedle.jpg"
const ExhebitionElementor = () => {
    return (
        <div className='exhebitionElementor'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-12 col-xs-12 col-s-12 exhebitionLeft">
                        <div className="row">
                            <div className="col-6 col-lg-6 col-md-6  col-xs-12 col-s-12 exbhebitionCenter">
                                <div className="exhebitionContent">
                                    <h3>Museum</h3>
                                    <ul>
                                        <li>Mon 10am – 5pm</li>
                                        <li>
                                            Tue 10am – 9pm</li>
                                        <li>
                                            Wed–Thu 10am – 5pm</li>
                                        <li>
                                            Fri 10am – 9pm</li>
                                        <li>
                                            Sat–Sun 10am – 5pm</li>
                                    </ul>
                                </div>
                                <div className="exhebitionContent">
                                    <h3>Box Office</h3>
                                    <ul>
                                        <li>Mon 10am – 5pm</li>
                                        <li>
                                            Tue 10am – 9pm</li>
                                        <li>
                                            Wed–Thu 10am – 5pm</li>
                                        <li>
                                            Fri 10am – 9pm</li>
                                        <li>
                                            Sat–Sun 10am – 5pm</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-lg-6 col-md-6  col-xs-12 col-s-12 exbhebitionCenter">
                                <div className="exhebitionContent">
                                    <h3>Bar Room</h3>
                                    <ul>
                                        <li>Mon 10am – 7pm</li>
                                        <li>
                                            Tue 10am – 9pm</li>
                                        <li>
                                            Wed–Thu 10am – 7pm</li>
                                        <li>
                                            Fri 10am – 9pm</li>
                                        <li>
                                            Sat–Sun 10am – 7pm</li>
                                    </ul>
                                </div>
                                <div className="exhebitionContent">
                                    <h3>Support</h3>
                                    <ul>
                                        <li>Mon 10am – 8pm</li>
                                        <li>
                                            Tue 10am – 9pm</li>
                                        <li>
                                            Wed–Thu 10am – 8pm</li>
                                        <li>
                                            Fri 10am – 9pm</li>
                                        <li>
                                            Sat–Sun 10am – 8pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-6 col-md-12 col-xs-12 col-s-12 exhebitionRight">
                        <img src={exhebition} alt="exhebition" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExhebitionElementor
