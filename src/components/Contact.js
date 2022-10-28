import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    
    <section className="contact">
        <div className="container ">
            <h2 className="text-center font-weight-bold">CONTACT ME</h2>
            <p >I AM HERE TO HELP YOU</p>
        </div>
        <div className="container-form">
            <div className="row">
            <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 col-1">
                <form>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="username" placeholder="Enter Your Name" autocomplete="off" required />
                    
                </div>           
                <div className="form-group">
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autocomplete="off" required/>
                    
                </div>           
                <div className="form-group">
                    
                    <input type="number" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Your Mobile Number" autocomplete="off" required/>
                    
                </div> 
                
                <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" placeholder="Enter Your Comment"></textarea>
                </div>
                <div className="form_button d-flex justify-content-center">
                <button type="submit" className="btn">Submit</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>

  
  )
}

export default Contact;