import React from 'react';
import { useState, useEffect } from 'react'
import '../App.css'
import Axios from 'axios';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

function Movie() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([])
  const [moviewRating, setMoviewRating] = useState(0);


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  useEffect(() => {
    Axios.get('http://localhost:3007/api/movie').then((response) => {
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



  console.log('setMoviewRating', moviewRating);

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
      </div>
    </div>
  )
}

export default Movie;

