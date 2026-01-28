import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="h-screen w-[20%] bg-zinc-100 flex items-center gap-5 flex-col ">
        <a
          className="mt-10 px-4 py-2 bg-blue-500 text-white rounded-md"
          href="/create"
        >
          Add New Product
        </a>
        <h1 className="text-2xl font-bold w-[80%]">Categorys</h1>
        <ul className="w-[80%]">
          <li className="flex items-center gap-2">
            <span className="w-[15px] h-[15px]  gap-2 bg-gray-400 rounded-full"></span>{" "}
            Category 1
          </li>
           <li className="flex items-center gap-2">
            <span className="w-[15px] h-[15px]  gap-2 bg-gray-400 rounded-full"></span>{" "}
            Category 2
          </li> <li className="flex items-center gap-2">
            <span className="w-[15px] h-[15px]  gap-2 bg-gray-400 rounded-full"></span>{" "}
            Category 3
          </li> <li className="flex items-center gap-2">
            <span className="w-[15px] h-[15px]  gap-2 bg-gray-400 rounded-full"></span>{" "}
            Category 4
          </li>
         
        </ul>
      </nav>
    </>
  );
};

export default Nav;
