import React, { useContext } from 'react'
import "./_ShopForm.scss"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../../Schema/Schema';
import * as yup from 'yup';
const ShopForm= () => {
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
        <div className='shopAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postShopInformation">
                            <Link to="">Go to Api</Link>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            name='name'
                                            {...register("name")}
                                            placeholder='Product name'
                                        />
                                        {errors.name && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            {...register("catagory")} 
                                            placeholder='Porduct catagory' name='title' />
                                        {errors.catagory && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='rate'
                                            {...register("rate")}
                                            placeholder='enter the rate number'
                                        />
                                        {errors.rate && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='price'
                                            {...register("price")}
                                            placeholder='enter the price'
                                        />
                                        {errors.rate && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='percantagePrice'
                                            {...register("percantagePrice")}
                                            placeholder='enter the percantage'
                                        />
                                        {errors.percantagePrice && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <label>Click the checkbox</label>
                                        <input type="checkbox"
                                            name='sale'
                                            {...register("sale")}
                                            placeholder='enter the percantage'
                                        />
                                        
                                        {errors.percantagePrice && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='workers'
                                            {...register("workers")}
                                            placeholder='Workers'
                                        />
                                        {errors.workers && <p>This field is required</p>}
                                    </div>
                                    <div className="inputOne">
                                        <input type="file"
                                            name='images'
                                            {...register("artPath")}
                                        />
                                        {errors.artPath && <p>file is not added</p>}
                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            placeholder='Enter the description'
                                            name='description'
                                            {...register("description")}
                                        >
                                        </textarea>
                                        {errors.description && <p>This field is required</p>}

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

export default ShopForm
