import React from 'react';
import { useState, useEffect } from 'react'
import Axios from 'axios';

function Offer()
{
    const [offername, setOfferName] = useState("");
    const [offercode, setOfferCode] = useState("");
    const [image, setImage] = useState("");
    const [offerlist, setOfferList] = useState([]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    useEffect(() => {
        Axios.get('http://localhost:3007/api/offer').then((response) => {
        setOfferList(response.data);
        console.log(response.data);});
    }, [])
    const submit1 = () => {
        Axios.post("http://localhost:3007/api/insert2", { offername: offername, offercode: offercode, image: image, today: today })
    
        setOfferList([...offerlist, { offername: offername, offercode: offercode, image: image, today: today }
          ,]);
        alert("successful insert");
    
      };    
      return(
        <>
        <h2> Compnent Offer Details</h2>
        <div className="form">
          <label>Offer Name:</label>
          <input type="text" name="offername" onChange={(e) => {
            setOfferName(e.target.value)
          }} />
          <label>Offer Code:</label>
          <input type="text" name="offercode" onChange={(e) => {
            setOfferCode(e.target.value)

          }} />
          <label htmlFor="UserName">Image</label>
<input type="file" className="form"
id="image" onChange={(e) => { e.preventDefault(); setImage(e.target.value) }} />
        </div>
        <button onClick={submit1}>SubmitOffer</button>
        </>
    )
}

export default Offer;
    