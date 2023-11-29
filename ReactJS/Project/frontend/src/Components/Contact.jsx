import React from 'react'
import { useParams } from "react-router-dom";

const Contact = () => {
    
    let { contactId } = useParams(); 
    
  return (
    
    <div>Contact {contactId} </div>
  )
}

export default Contact