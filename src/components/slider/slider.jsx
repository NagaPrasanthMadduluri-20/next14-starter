"use client"
import React, { useState } from "react";
import Image from "next/image";
import Denooo from "../../../public/Denoooooo.svg";
import neemo from "../../../public/neemo.svg";
import octopus from "../../../public/octopus.svg";
import statsigceo from "../../../public/statsigceo.svg";


const Slider = () => {
  const [activeContent, setActiveContent] = useState(1);

  const handleClick = (contentId) => {
    setActiveContent(contentId);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 1:
        return (
          <div className=" text-white text-center">
            <h2 className="max-w-[300px]">
              Scout is an indispensable tool for our Engineering, DS and Sales
              teams to engage with our customers. We rely on Scout daily, making
              it an integral part of our operations.
            </h2>
            <div className="mx-auto max-w-10 mt-10">
              <Image src={statsigceo} alt="ceo" />
            </div>
            <p>Vijaye raj</p>
            <p>CEO of Statsig</p>
          </div>
        );
      case 2:
        return (
          <div className=" text-white text-center">
            <h2 className="max-w-[300px]">
              Scout is an indispensable tool for our Engineering, DS and Sales
              teams to engage with our customers. We rely on Scout daily, making
              it an integral part of our operations.DS and Sales
              teams to engage with our customers
            </h2>
            <div className="mx-auto max-w-10 mt-10">
              <Image src={statsigceo} alt="ceo" />
            </div>
            <p>prasanth</p>
            <p>CEO of Denoo</p>
          </div>
        );
      case 3:
        return (
          <div className=" text-white text-center">
            <h2 className="max-w-[300px]">
              Scout is an indispensable tool for our Engineering, DS and Sales
              teams to engage with our customers. 
            </h2>
            <div className="mx-auto max-w-10 mt-10">
              <Image src={statsigceo} alt="ceo" />
            </div>
            <p>Subhash</p>
            <p>CEO of octopus</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row items-center justify-between max-w-[600px] mx-auto">
      <div className="flex flex-col items-center bg-[#1E1E1E]">
        <div
          className={`p-10 cursor-pointer ${
            activeContent === 1 ? "border-solid border-2 border-white" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <Image src={octopus} alt="deno" className={activeContent === 3 ? "styles.active-image" : ""}/>
        </div>
        <div
          className={`p-10 cursor-pointer ${
            activeContent === 2 ? "border-solid border-2 border-white" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <Image src={neemo} alt="deno" className={activeContent === 3 ? "styles.active-image" : ""}/>
        </div>
        <div
          className={`p-10 cursor-pointer ${
            activeContent === 3 ? "border-solid border-2 border-white" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <Image src={Denooo} alt="deno" className={activeContent === 3 ? "styles.active-image" : ""}/>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Slider;