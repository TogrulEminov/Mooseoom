import React from 'react'
import "./_BlogComment.scss"
const BlogComment = () => {
    return (
        <div className='addComment'>
            <article>
                <h2>Leave a comment</h2>
            </article>
            <form action="">
                <div className="content">
                    <textarea name="" id="" placeholder='Your comment'></textarea>
                    <p></p>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="inputOne col-6">
                            <input type="text" placeholder='Your name' />
                            <p></p>
                        </div>
                        <div className="inputOne col-6">
                            <input type="email" placeholder='Your email' />
                            <p></p>
                        </div>
                        <div className="content">
                            <button>Submit now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BlogComment
