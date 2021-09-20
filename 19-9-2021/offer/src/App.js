import './App.css';
import Offer from './myComponents/Offer';
import Region from './myComponents/Region-wise-cinema';
import { Route } from "react-router-dom";

function App() {
  return (
    <>
    
        <Route exact path="/offer">
          <Offer />
        </Route>
        <Route exact path="/region">
          <Region />
        </Route>

    </>
  );
}

export default App;
