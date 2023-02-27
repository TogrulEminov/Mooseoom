import React, { useContext } from 'react'
import "./_BlogForm.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context';
const BlogForm = () => {
    const { postBlogData,handleBlogChange, setBlogFile,blogForm } = useContext(mainContext)
    return (
        <div className='blogAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postblogInformation">
                            <Link to="">Go to Blog Api</Link>
                            <form onSubmit={postBlogData}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            name='title'
                                            value={blogForm.title}
                                            onChange={handleBlogChange }
                                            placeholder='Product title'

                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            placeholder='Porduct catagory'
                                            value={blogForm.catagories}
                                            onChange={handleBlogChange }
                                            name='catagories' />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='date'
                                            value={blogForm.date}
                                            onChange={handleBlogChange }
                                            placeholder='enter the date ex:Nov 21'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='publisher'
                                            value={blogForm.publisher}
                                            onChange={handleBlogChange }
                                            placeholder='enter the publsiher name *'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="url"
                                            name='publisherUrl'
                                            value={blogForm.publisherUrl}
                                            onChange={handleBlogChange }
                                            placeholder='enter the url'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            name='archives'
                                            value={blogForm.archives}
                                            onChange={handleBlogChange }
                                            placeholder='enter the archives date ex:April 21'
                                        />
                                    </div>
                                   
                                    <div className="inputOne">
                                        <input type="file"
                                            name='photo'
                                            onChange={(e) =>  setBlogFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            placeholder='Enter the description'
                                            name='information'
                                            value={blogForm.information}
                                            onChange={handleBlogChange }
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

export default BlogForm
