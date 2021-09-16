/*import StarRatings from 'react-star-ratings';
import React ,{ Component } from 'react';
 

class Star extends Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating,
        this:newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.setState.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
      
        />
      );
    }
}
 
 
class Bar extends Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={2.403}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}
*/
/*import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';
export default function Star() {
  const [rating,setRating] = useState("");
  const startClick = (nextValue) =>{
    setRating({rating:nextValue});
  }
  return (
    <div>
      <h2>Rating from state: {rating}</h2>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={(e)=>{e.preventDefalt();setRating(e.target.value)}}
        onStarClick={startClick(nextValue)}
      />
    </div>
  )
}*/
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Star = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                console.log(givenRating);
                // alert(`Are you sure you want to give ${givenRating} stars ?`);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};
  
export default Star;
// class Star extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       rating: 0
//     };
//   }

//   onStarClick(nextValue, prevValue, name) {
//     this.setState({ rating: nextValue });
//     console.log(nextValue);
//   }

//   render() {
//     const { rating } = this.state;
//     console.log("rate of", rating);

//     return (
//       <div>
//         <h2>Rating from state: {rating}</h2>
//         <StarRatingComponent
//           name="rate1"
//           starCount={5}
//           value={rating}
//           onStarClick={this.onStarClick.bind(this)}
//         />
//       </div>
//     );
//   }
// }
// export default Star;