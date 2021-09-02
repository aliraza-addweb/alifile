import './App.css';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import Data from "./Mycomponents/Data";
//import Multi from "./Mycomponents/Multi";
import { useState } from 'react';
import { Route } from "react-router-dom";
import Home from "./Mycomponents/Home";
import About from "./Mycomponents/About";
import Contact from './Mycomponents/Contact';
import Login from './Mycomponents/Login';
import Signup from './Mycomponents/Signup';
import Localstorage from './Mycomponents/Localstorage';
import { createContext } from 'react'
import ComA from './ComA';
import UseEffect from './UseEffect';

const FirstName = createContext();
const LastName = createContext();

const App = ()  => {
  const [name, setName] = Localstorage('name', '');
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Header title="My React Website" searchBar={false} mode={mode} toggleMode={toggleMode} />
      <Data />
      <Route exact path="/home" >
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Todos />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <FirstName.Provider value={"Ali"}>
        <LastName.Provider value={"khunt"}>
          <ComA ></ComA>
        </LastName.Provider>
      </FirstName.Provider>
      <UseEffect />
      <Footer />
    </>
  );
}
export default App;
export { FirstName, LastName};
