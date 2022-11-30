import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BtnSlider({ direction, moveSlide }:{direction:string;moveSlide:() => void}) {
  console.log(direction, moveSlide);
  return (
    <button
        onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    
      <img src={direction === "next" ? '/derecha.png' : '/izquierda.png'}/>
    </button>
  );
}