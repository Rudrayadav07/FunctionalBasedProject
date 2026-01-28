import Home from "./Components/Home";
import {  Route ,Routes } from "react-router-dom";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="flex">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
