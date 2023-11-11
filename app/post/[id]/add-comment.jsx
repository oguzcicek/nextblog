'use client'

import {useState} from "react";


export default function AddComment( { postId } ){

    const submitComment = (e) => {
        e.preventDefault();
     //fetch(`http://127.0.0.1:3001/api/v1/posts/${postId}/post_comments`, {
      fetch(`https://admin.clubgamefi.com/api/v1/posts/${postId}/post_comments`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify(form)
        }).then((res) => {
            console.log(form)
            if (res.status === 200) {
                setFormSuccess(true)
                setFormSuccessMessage('Thank you for your comment! It will be shown after approved!')
            }
            console.log(res)
            resetForm()
        }).catch((err) => { 
            
            console.log(err)}
            );
    }

    const DEFAULT_DATA = { name: "", email: "", comment: "" }
    const resetForm = () => setFrom(DEFAULT_DATA)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFrom({
            ...form,
            [name]: value
        });
    }

    const [form, setFrom] = useState(DEFAULT_DATA)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    return(
        <>
            <div className="comment-form wow fadeIn animated">
                {formSuccess &&
                    <div className="alert alert-success" role="alert">
                        {formSuccessMessage}
                    </div>
                }
                <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Leave a Comment</h5>
                </div>
                <form className="form-contact comment_form" onSubmit={submitComment} >
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea className="form-control w-100" name="comment" required onChange={handleChange} cols={30} rows={9} placeholder="Write Comment" value={form.comment} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input className="form-control" name="name" required onChange={handleChange} type="text" placeholder="Name" value={form.name} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input className="form-control" name="email" required onChange={handleChange} type="email" placeholder="Email" value={form.email} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn button button-contactForm" >Post Comment</button>
                    </div>
                </form>

            </div>
        </>
    );
}