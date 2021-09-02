import React from 'react'
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import changeTheNumber from './reducers/updown';
import {sub} from './index'
import { useSelector, useDispatch } from "react-redux";
const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API


  const changeTheNumber = useSelector(state=> state.changeTheNumber);
  // console.log(changeTheNumber1);
  
  const dispatch = useDispatch();
//  const getnumber=(props)=>{props.getnum};

  const sub1 = sub();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
        <h1>{sub1}</h1> 
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
        <changeTheNumber getnum={sub}></changeTheNumber>  
  
          </div>
        </div>
    </>
  )
}

export default App