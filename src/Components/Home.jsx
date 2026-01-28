import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />

      <div className=" w-[80%] p-5 h-screen bg-red-100 flex flex-wrap overflow-y-scroll">
        <Link to="/details/1" className=" card flex justify-center item-center w-[18%] h-[30vh] bg-white m-5 p-7 rounded-md shadow-md flex-col">
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png")`,
            }}
          ></div>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
