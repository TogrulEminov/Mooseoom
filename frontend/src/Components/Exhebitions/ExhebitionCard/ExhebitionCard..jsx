import React from 'react'
import "./_ExhebitionCard.scss"
import { Link } from "react-router-dom"
const ExhebitionCard = () => {
    return (
        <div className='exhebitionCard'>
            <div className="card-1">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-9 col-md-12 col-xs-12 col-s-12 content">
                            <h4>Oct 25 - Nov 11</h4>
                            <h2>Paul Gauguin 1st Tahiti Period</h2>
                        </div>
                        <div className="col-3 col-lg-3 col-md-6 col-xs-12 col-s-12 content">
                            <Link to="/buyticket">
                                Buy Ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-1 card-2">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-9 col-md-12 col-xs-12 col-s-12 content">
                            <h4>Nov 12 - Nov 28</h4>
                            <h2>Paul Klee Later Works</h2>
                        </div>
                        <div className="col-3 col-lg-3 col-md-6 col-xs-12 col-s-12 content">
                            <Link to="/buyticket">
                                Buy Ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-1 card-3">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-9 col-md-12 col-xs-12 col-s-12 content">
                            <h4>Nov 29 - Dec 15</h4>
                            <h2>Van Gogh Retrospective</h2>
                        </div>
                        <div className="col-3 col-lg-3 col-md-6 col-xs-12 col-s-12  content">
                            <Link to="/buyticktet">
                                Buy Ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-1 card-4">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-9 col-md-12 col-xs-12 col-s-12 content">
                            <h4>Dec 16 - Dec 29</h4>
                            <h2>Fathers of impressionism</h2>
                        </div>
                        <div className="col-3 col-lg-3 col-md-6 col-xs-12 col-s-12 content">
                            <Link to="/buyticktet">
                                Buy Ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-1 card-5">
                <div className="container">
                    <div className="row">
                        <div className="col-9 col-lg-9 col-md-12 col-xs-12 col-s-12 content">
                            <h4>Jan 10 - Feb 02</h4>
                            <h2>Jenny Saville Experience</h2>
                        </div>
                        <div className="col-3 col-lg-3 col-md-6 col-xs-12 col-s-12 content">
                            <Link to="/buyticktet">
                                Buy Ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExhebitionCard
