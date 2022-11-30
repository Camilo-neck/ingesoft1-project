import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BtnSlider from './BtnSlider'
import { useState } from 'react';


export default function PhotosSlider({photos}:{photos:{ id:number;url: string; title: string; }[]}){
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== photos.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === photos.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(photos.length)
        }
    }

    const moveDot = (index: React.SetStateAction<number>) => {
        setSlideIndex(index)
    }
    return(
        <div className='w-full h-4/5 shadow-lg align-top relative overflow-hidden'>
            {photos.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.url} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
)};

