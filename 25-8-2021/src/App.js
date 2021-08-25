import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './MyComponents/Header'
import Data from './MyComponents/Data'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import Hobby from "./MyComponents/Hobby";

function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  let display;

  const onDelete = (todo) => {
    console.log("i am on deleted", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const addTodo = (title,desc,mail,hobb,hdesc,qual,perc) => {
    let sno;
    console.log('i am addTodo function', title, desc);
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      title: title,
      desc: desc,
      mail: mail,
      sno: sno,
      hobb: hobb,
      hdesc: hdesc,
      qual: qual,
      perc: perc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
      localStorage.setItem('todos',JSON.stringify(todos));

  }


  const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
    
    console.log(todos);

  return (

<>
    <Router>
      <Header title='MyUser' />

      <Switch/>
        <Route exact path="/">
          <AddTodo addTodo={addTodo} display={display} todos={todos} />
          <Data  todos={todos} onDelete={onDelete} />
        </Route>
        <Route path="/about">
          {/* <AddTodo addTodo={addTodo} display={display} />
          <Data todos={todos} onDelete={onDelete} /> */}
          <Hobby />
        </Route>
</Router>
  </>

      );
}

      export default App;
