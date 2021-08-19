import './App.css';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import Data from "./Mycomponents/Data";

function App() {
  return (
    <>
      <Header title="My React Website" searchBar={false} />
      <Todos />
      <Data />
      <Footer />
    </>
  );
}

export default App;
