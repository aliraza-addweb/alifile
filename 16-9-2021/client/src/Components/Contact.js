import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios';

function Contact()
{
    const [contactname, setContactName] = useState("");
    const [emailid, setEmailId] = useState("");
    const [reason, setReason] = useState("");
    const [contactlist, setContactList] = useState([]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    useEffect(() => {
          Axios.get('http://localhost:3007/api/contact').then((response) => {
          setContactList(response.data);
          console.log(response.data);});
      }, [])

      const submit = () => {
        console.log("sandip console",contactname,emailid,reason);
        Axios.post("http://localhost:3007/api/insert1", { contactname: contactname, emailid: emailid, reason: reason, today: today})
    
        setContactList([...contactlist, { contactname: contactname, emailid: emailid, reason: reason, today: today}
          ,]);
        alert("successful insert");
    
      };
      console.log('date', today);
      return(
          <>
        <h2>Contact us</h2>
        <div className="form">
          <label>Contact Name:</label>
          <input type="text" name="contactname" onChange={(e) => {
            setContactName(e.target.value)
          }} />
          <label>EmailId:</label>
          <input type="text" name="emailid" onChange={(e) => {
            setEmailId(e.target.value)

          }} />
          <label>Reason:</label>
          <input type="text" name="reason" onChange={(e) => {
            setReason(e.target.value)
          }} />
        </div>
        <button onClick={submit}>SubmitForm</button>
        </>
      )
      
}
export default Contact;