import React from "react";

import "./contact.styles.scss";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/959cd980-6999-11ec-b2d5-af79f33d926c";

const Contact = () => {
  return (
    <div className="contact">

    <h3 style={{color:'#666', marginTop:'12px'}}>Contact Form</h3>
    <div className = 'blue-line' style={{height:'3px', width:'16%', marginLeft:'42%', backgroundColor:'#0099ff', marginTop:'20px', marginBottom:'20px'}}></div>

      <form
        action="https://public.herotofu.com/v1/959cd980-6999-11ec-b2d5-af79f33d926c"
        method="post"
      >
      <div style={{marginBottom:'10px'}}>
      <input style={{padding:'14px 20px'}} name="Name" id="name" type="text" placeholder='Name'  required />
        </div>
        <div style={{marginBottom:'10px'}}>
          <input style={{padding:'14px 20px'}} name="Email" id="email" type="email" placeholder='Email' required />
        </div>
        <div style={{marginBottom:'10px'}}>
        <input style={{padding:'14px 20px 60px 20px', height:'90px'    }} name="Message" id="message" type="text" placeholder='Message' required />
      </div>
      <div style={{marginBottom:'25px'}}>
      <input type="submit" value="Submit" style={{width:'100px',padding:'10px 20px', backgroundColor:'#009aff', color:'white'}} />
        </div>
      </form>
    </div>
  );
};
export default Contact;
