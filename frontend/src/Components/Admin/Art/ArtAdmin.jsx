import React, { useContext, useState } from 'react'
import "./_Art.scss"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../Schema/Schema';
import * as yup from 'yup';
import { mainContext } from '../../../Context/Context';
import axios from 'axios';
const ArtAdmin = () => {
    const { getArtData } = useContext(mainContext)
    const [state, setState] = useState({
        name: "",
        workers: "",
        information: "",
        artPath: "",
        title: ""
    })
    const url = "http://localhost:5555/art"
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const postData = () => {
        if (!state.name || !state.information || !state.artPath || !state.workers || !state.title) return;
        axios.post("http://localhost:5555/art", state);
        setState({
            name: "",
            information: "",
            artPath: "",
            workers: "",
            title: ""
        });
        getArtData();
    };
console.log(state);
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(yupSchema),
        });
    const onSubmit = (data) => {
        console.log(data);
  
    }
    return (
        <div className='artAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postArtInformation">
                            <Link to="">Go to Api</Link>
                            <form onSubmit={() => handleSubmit(onSubmit)}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            // value={state.name}
                                            onChange={handleChange}
                                            {...register("name")}
                                            placeholder='Product name'
                                            name='name' />
                                        {errors.name && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            // value={state.title}
                                            onChange={handleChange}
                                            {...register("title")}
                                            placeholder='Porduct title' name='title' />
                                        {errors.title && <p>This field is required</p>}

                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            // value={state.workers}
                                            onChange={handleChange}
                                            {...register("workers")}
                                            placeholder='Workers'
                                            name='workers' />
                                        {errors.workers && <p>This field is required</p>}

                                    </div>
                                    <div className="inputOne">
                                        <input type="file"
                                            // value={state.artPath}
                                            onChange={handleChange}
                                            {...register("artPath")}
                                            name='artPath' />
                                        {errors.artPath && <p>file is not added</p>}

                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            // value={state.information}
                                            onChange={handleChange}
                                            {...register("information")}
                                            placeholder='Enter the information'
                                            name='information'>
                                        </textarea>
                                        {errors.information && <p>This field is required</p>}

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
