const Details = () => {
  return (
    <>
      <div className="h-screen w-full flex  items-center justify-center ">
        <div>
          <img
            className=" ml-[25%] w-[55%] bg-contain "
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
          />
        </div>
          <div className=" w-74 h-84   mt-18 flex flex-col justify-center gap-5 rounded-md shadow-md">
           
            <h1 className="text-2xl font-bold mt-[-15%]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
            <h3 className="ml-2">$109.95</h3>
            <p className="w-[70%]">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
          </div>
        
      </div>
    </>
  );
};

export default Details;
