import React from "react";
import image from "../../asset/picture/3.PNG";
const Slider_1 = () => {
  return (
    <div>
      <div className="slider_im">
        <img src={image}></img>
        <h1 className="text-xl text-slate-300">Admin Dashboard</h1>
        <p className="text-slate-400">Tecnology : React,Boostrup,Api</p>
      </div>
    </div>
  );
};

export default Slider_1;
