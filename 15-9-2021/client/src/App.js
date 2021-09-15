import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Axios from 'axios';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Components/RatingStyles";


function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([])

  const [moviewRating, setMoviewRating] = useState(0);
  const [newReview, setNewReview] = useState("");

  const [contactname, setContactName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [reason, setReason] = useState("");
  const [contactlist, setContactList] = useState([]);

  const [offername, setOfferName] = useState("");
  const [offercode, setOfferCode] = useState("");
  const [image, setImage] = useState("");
  const [offerlist, setOfferList] = useState([]);



  /*const newDate = newDate();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();*/

  /*const tempDate = new Date();
  const date = `${tempDate.getFullYear()}${(tempDate.getMonth() + 1)}${(tempDate.getDate())}`;
  console.log(date);*/
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  useEffect(() => {
    Axios.get('http://localhost:3007/api/get').then((response) => {
      setMovieList(response.data);
      console.log(response.data);
    })
  }, [])



  const submitReview = () => {
    Axios.post("http://localhost:3007/api/insert", { movieName: movieName, movieReview: review, moviewRating: parseInt(moviewRating), today: today })

    setMovieList([...movieReviewList, { movieName: movieName, movieReview: review, moviewRating: parseInt(moviewRating), today: today }
      ,]);
    alert("successful insert");

  };
  const submit = () => {
    console.log("sandip console",contactname,emailid,reason);
    Axios.post("http://localhost:3007/api/insert1", { contactname: contactname, emailid: emailid, reason: reason, today: today})

    setContactList([...contactlist, { contactname: contactname, emailid: emailid, reason: reason, today: today}
      ,]);
    alert("successful insert");

  };


  const submit1 = () => {
    Axios.post("http://localhost:3007/api/insert", { offername: offername, offercode: offercode, today: today })

    setOfferList([...offerlist, { offername: offername, offercode: offercode, today: today }
      ,]);
    //alert("successful insert");

  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3007/api/delete/${movie}`)
  }

  const updateReview = (movie) => {
    Axios.put(`http://localhost:3007/api/update`, {
      movieName: movie, movieReview: newReview,
    });
    setNewReview("");
  }

  console.log('setMoviewRating', moviewRating);
  console.log('offer name', offername);
  console.log('offer name', offercode);
  console.log('date', today);
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input type="text" name="movieName" onChange={(e) => {
          setMovieName(e.target.value)
        }} />
        <label>Review:</label>
        <input type="text" name="movieReview" onChange={(e) => {
          setReview(e.target.value)
        }} />


        <Container>
          {[...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
              <label>
                <Radio
                  type="radio"
                  value={givenRating}
                  onClick={() => {
                    setMoviewRating(givenRating);
                    //alert(`Are you sure you want to give ${givenRating} stars ?`);
                    console.log('givenRating => ', givenRating);
                  }}
                />
                <Rating>
                  <FaStar
                    color={
                      givenRating < moviewRating || givenRating === moviewRating
                        ? "000"
                        : "rgb(192,192,192)"
                    }
                  />
                </Rating>
              </label>
            );
          })}
        </Container>
        <button onClick={submitReview}>Submit</button>
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

        <h2>Offer Details</h2>
        <div className="form">
          <label>Offer Name:</label>
          <input type="text" name="offername" onChange={(e) => {
            setOfferName(e.target.value)
          }} />
          <label>Offer Code:</label>
          <input type="text" name="offercode" onChange={(e) => {
            setOfferCode(e.target.value)

          }} />
          {/* <label>Image:</label>
        <input type="file" /> */}
        </div>
        <button onClick={submit1}>SubmitOffer</button>

        {movieReviewList.map((val) => {
          return (
            <div className="card">
              <h1>{val.movieName}</h1>
              <p>{val.movieReview} </p>
              <p1>{val.moviewRating}</p1>

              <button onClick={() => { deleteReview(val.movieName) }}>Delete</button>
              <input type="text" id="updateInput" onChange={(e) => {
                setNewReview(e.target.value)
              }} />
              <button onClick={() => { updateReview(val.movieName) }}>Update</button>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;