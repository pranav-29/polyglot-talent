import React, { useState } from 'react';
import './PopupForm.css';
import { IoClose } from 'react-icons/io5';
import * as emailjs from "emailjs-com";

const PopupForm = ({ isOpen, onClose, onSubmit, children }) => {

  const[Name, setname] = useState("");
  const[Email, setemail] = useState("");
  const[Message, setmsg] = useState("");

  function Sendmail(){

    const Data = {
      to_name: Name,
      to_email: Email,
      message: Message
    }
    const Service_id = "service_5b0p6zo";
    const Template_id = "template_fqqftvn";
    const user_id = "tEVFj27AmZ04SA4eW";

    emailjs.send(Service_id, Template_id, Data, user_id).then(
      function(response){
        console.log("sucess")
      },
      function(error){
        console.log("error")
      }
    )

  }

  if (!isOpen) {
    return null;
  }
  

  return (
    <div className="modal-overlay">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <div className="header-content">
            <span>GET IN TOUCH</span>
            <span className="modal-close" onClick={onClose}>
              <IoClose />
            </span>
          </div>
        </div>

          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name*" name="name" onChange={(e)=>{setname(e.target.value)}} />
            <input type="email" placeholder="Email*" name="email"  onChange={(e)=>{setemail(e.target.value)}} />
            <textarea name="message" placeholder="Message*" rows="4" onChange={(e)=>{setmsg(e.target.value)}} />
            <button className="sendButton" type="submit" onClick={()=>{Sendmail()}}>
              Send
            </button>
          </form>
          {children}
      </div>
    </div>
  );
};

export default PopupForm;
