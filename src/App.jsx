import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#19a2ae] relative z-50 overflow-hidden">
      <img src="bg-pattern-top.svg" className="absolute -top-80 -left-[120px] " alt="" />
      <img src="bg-pattern-bottom.svg" className="absolute -bottom-[520px] right-[0px] z-40 " alt="" />
      {/* card */}
      <div className="bg-white w-[340px] h-[350px] shadow-md rounded-xl overflow-hidden z-50">
        {/* header */}
        <div className="relative ">
          <div className="">
            <img src="bg-pattern-card.svg" className="" alt="background" />
          </div>
          {/* perfil */}
          <div className="absolute transform translate-x-[120px] -translate-y-[50px]">
            <img
              src="image-victor.jpg"
              className=" rounded-full border-white border-[4px]"
              alt="perfil"
            />
          </div>
        </div>
        <div className="pt-20 text-center pb-4">
          <h1 className="font-bold text-[#2d3248]">
            Victor Crest <span className="text-[#6a6f81] font-normal">26</span>{" "}
          </h1>
          <p className="text-[#6a6f81] text-xs">London</p>
        </div>
        <div className="flex justify-around items-center py-4 border-t-[1px]">
          
          <div className="text-center" >
            <h1 className="font-bold">80K</h1>
            <p className="tracking-wider text-xs text-[#6a6f81]">Followers</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">803K</h1>
            <p className="tracking-wider text-xs text-[#6a6f81]">Likes</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold">1.4K</h1>
            <p className="tracking-wider text-xs text-[#6a6f81]">photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
