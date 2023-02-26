import React, { useContext, useState } from 'react'
import "./_Art.scss"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../../Schema/Schema';
import * as yup from 'yup';
import { mainContext } from '../../../../Context/Context';
import axios from 'axios';

const initialState = {
    name: "",
    workers: "",
    information: "",
    title: "",
}
const ArtAdmin = () => {
    const { getArtData } = useContext(mainContext)
    const [state, setState] = useState(initialState)

    const [file, setFile] = useState(null)


    const handleChange = (e) => {
        const  {value, name} = e.target 
        setState({
            ...state,
            [name]: value
        });

    };

    const postData = async (e) => {
        e.preventDefault()
        if (!state.name || !state.information || !state.workers || !state.title) return;
        const formData = new FormData()
        formData.append("images", file)
        formData.append("name", state.name)
        formData.append("workers", state.workers)
        formData.append("information", state.information)
        formData.append("title", state.title)
        
        await axios({
            method: "POST",
            url: "http://localhost:5555/art",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
    

        // await axios.post("http://localhost:5555/art", { ...state, images: formData }, {
        //     headers: {

        //     }
        // });
        // setState(initialState);
        getArtData();
    };

   


    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(yupSchema),
        });

    const onSubmit = (data) => {
        console.log(data);
        postData()
    }
    return (
        <div className='artAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postArtInformation">
                            <Link to="">Go to Api</Link>
                            <form onSubmit={postData}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            name='name'
                                            {...register("name")}
                                            value={state.name}
                                            onChange={handleChange}
                                            placeholder='Product name'
                                        />
                                        {errors.name && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            {...register("title")}
                                            value={state.title}
                                            onChange={handleChange}
                                            placeholder='Porduct title' name='title' />
                                        {errors.title && <p>This field is required</p>}

                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='workers'
                                            {...register("workers")}
                                            value={state.workers}
                                            onChange={handleChange}
                                            placeholder='Workers'
                                        />
                                        {errors.workers && <p>This field is required</p>}

                                    </div>
                                    <div className="inputOne">
                                        <input type="file"
                                            name='images'
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                        {/* {errors.artPath && <p>file is not added</p>} */}

                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            placeholder='Enter the information'
                                            name='information'
                                            value={state.information}
                                            {...register("information")}
                                            onChange={handleChange}

                                        >
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
