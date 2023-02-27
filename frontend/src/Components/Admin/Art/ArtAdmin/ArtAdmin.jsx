import React, { useContext, useState } from 'react'
import "./_Art.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context';

const ArtAdmin = () => {
    const { state, handleChange, postArtData, setFile } = useContext(mainContext)
    return (
        <div className='artAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postArtInformation">
                            <Link to="">Go to Art Api</Link>
                            <form onSubmit={postArtData}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            name='name'
                                            value={state.name}
                                            onChange={handleChange}
                                            placeholder='Product name'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            value={state.title}
                                            onChange={handleChange}
                                            placeholder='Porduct title' name='title' />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='workers'
                                            value={state.workers}
                                            onChange={handleChange}
                                            placeholder='Workers'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="file"
                                            name='images'
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            placeholder='Enter the information'
                                            name='information'
                                            value={state.information}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="inputOne">
                                        <button>Add to Api</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtAdmin
