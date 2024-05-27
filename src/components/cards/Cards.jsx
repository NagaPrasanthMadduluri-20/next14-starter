import React from "react";
import Cardone from "./cardone/Cardone";
import Cardtwo from "./cardtwo/Cardtwo";
import Cardthree from "./cardthree/Cardthree";
import Downcardone from "./downcard1/Downcardone";
import DownCard2 from "./downcard2/Downcard2";
import DownCard3 from "./downcard3/Downcard3";


const Cards = () => {
  return (
  <>
    <div className="flex flex-col">
    <div className="text-white flex flex-row w-[100%] items-stretch">
        <div className="w-[40%]">
            <Cardone/>
        </div>
        <div className="w-[30%]">
            <Cardtwo/>
        </div>
        <div className="w-[30%]">
            <Cardthree/>
        </div> 
    </div>    
    <div className="text-white flex flex-row w-[100%] items-stretch">
       
           <div className="w-[30%]">
        <Downcardone/>
        </div>
            <div className="w-[30%]">
        <DownCard2/>
        </div>
            <div className="w-[40%]">
        <DownCard3/>
        </div>
    </div> 
    </div>   
  </>
  );
};

export default Cards;
