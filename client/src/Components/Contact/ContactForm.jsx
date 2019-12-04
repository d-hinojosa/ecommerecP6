import React from '../../../node_modules/react';

function ContactForm() {
    return(
        <React.Fragment>
        <div className="container4">
          <div className='formmain'>
            <h2 className="lead">Contact Us</h2>
            <p className="lead">Diamond Valley, Barbados</p>
            <p>(704) 971-2300</p>
            <p>bhs.rns@gmail.com</p>
          </div>
          <div className="row">
            <div className="column">
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158170.602438572!2d-59.626594837899674!3d13.190508154365478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f1fbae321aa3%3A0xeec51b38cf4362b!2sBarbados!5e0!3m2!1sen!2sus!4v1564151206471!5m2!1sen!2sus" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="column">
              <form className=".needs-validation" action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter First Name" required/>
                
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Enter Last Name" required/>
                
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" required/>
                
                <label for="subject">Subject</label>
                <input type="subject" id="subject" name="subject" placeholder="Enter Subject" required/>
                
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something you liked about this page." style={{height:'170px'}}></textarea>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div> 
    </React.Fragment>
    )
}
export default ContactForm;