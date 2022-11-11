/* eslint-disable react/jsx-key */
import React from 'react'
import Cards from './Cards'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const categories = [
  {
    img: '/Cards/Desayuno.png',
    cardImageDescription: "Desayuno",
    cardTitle: "Desayuno ",
    cardSubtitle: "Para empezar tus días"
  },
  {
    img: '/Cards/Almuerzo.png',
    cardImageDescription: "Almuerzo",
    cardTitle: "Almuerzo",
    cardSubtitle: "Delicias en tus tardes"
  },
  {
    img: '/Cards/Ropa.png',
    cardImageDescription: "Ropa",
    cardTitle: "Ropa",
    cardSubtitle: "Todo lo mejor a tu estilo"
  },
  {
    img: '/Cards/Bisuteria.png',
    cardImageDescription: "Bisuteriao",
    cardTitle: "Bisuteria",
    cardSubtitle: "Accesorios para todos"
  },
  {
    img: '/Cards/Postres.png',
    cardImageDescription: "Postres",
    cardTitle: "Postres",
    cardSubtitle: "Lo que te alegra los dias"
  },
  {
    img: '/Cards/Almuerzo.png',
    cardImageDescription: "Almuerzo",
    cardTitle: "Almuerzo",
    cardSubtitle: "Delicias en tus tardes"
  },
  {
    img: '/Cards/Ropa.png',
    cardImageDescription: "Ropa",
    cardTitle: "Ropa",
    cardSubtitle: "Todo lo mejor a tu estilo"
  },
  {
    img: '/Cards/Bisuteria.png',
    cardImageDescription: "Bisuteriao",
    cardTitle: "Bisuteria",
    cardSubtitle: "Accesorios para todos"
  },
  {
    img: '/Cards/Postres.png',
    cardImageDescription: "Postres",
    cardTitle: "Postres",
    cardSubtitle: "Lo que te alegra los dias"
  }

]

function SliderOfCards() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    if (slider != null) {
      slider.scrollLeft = slider?.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    if (slider != null) {
      slider.scrollLeft = slider?.scrollLeft + 500;
    }
  };

  return (
    // <div
    //     id="scrollContainer"
    //     className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
    //   >

    //     <div
    //       className="flex-none w-10  border m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-10 aspect-h-9">

    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">

    //           </div>
    //           <div className="text-lg">

    //           </div>
    //         </div>
    //       </a>
    //     </div>

    //     <div
    //       className="flex-none w-56 h-65 border rounded-lg m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-16 aspect-h-9">
    //           <img
    //             className="w-20 h-15 md:w-32 sm:w-32 w-fit h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12"
    //             src="/Cards/Desayuno.png"
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">
    //             <h3 className="text-2xl font-semibold tracking-widest font-bold text-gray-800 text-2xl mb-2">
    //               Desayuno
    //             </h3>
    //           </div>
    //           <div className="text-lg">
    //             <p className="text-sm tracking-widest leading-none">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               nam
    //             </p>

    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //     <div
    //       className="flex-none w-56 h-65 border rounded-lg m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-16 aspect-h-9">
    //           <img
    //             className="w-20 h-15 md:w-32 sm:w-32 w-fit h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12"
    //             src="/Cards/Desayuno.png"
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">
    //             <h3 className="text-2xl font-semibold tracking-widest font-bold text-gray-800 text-2xl mb-2">
    //               Desayuno
    //             </h3>
    //           </div>
    //           <div className="text-lg">
    //             <p className="text-sm tracking-widest leading-none">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               nam
    //             </p>

    //           </div>
    //         </div>
    //       </a>
    //     </div>

    //     <div
    //       className="flex-none w-56 h-65 border rounded-lg m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-16 aspect-h-9">
    //           <img
    //             className="w-20 h-15 md:w-32 sm:w-32 w-fit h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12"
    //             src="/Cards/Desayuno.png"
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">
    //             <h3 className="text-2xl font-semibold tracking-widest font-bold text-gray-800 text-2xl mb-2">
    //               Desayuno
    //             </h3>
    //           </div>
    //           <div className="text-lg">
    //             <p className="text-sm tracking-widest leading-none">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               nam
    //             </p>

    //           </div>
    //         </div>
    //       </a>
    //     </div>

    //     <div
    //       className="flex-none w-56 h-65 border rounded-lg m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-16 aspect-h-9">
    //           <img
    //             className="w-20 h-15 md:w-32 sm:w-32 w-fit h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12"
    //             src="/Cards/Desayuno.png"
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">
    //             <h3 className="text-2xl font-semibold tracking-widest font-bold text-gray-800 text-2xl mb-2">
    //               Desayuno
    //             </h3>
    //           </div>
    //           <div className="text-lg">
    //             <p className="text-sm tracking-widest leading-none">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               nam
    //             </p>

    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //     <div
    //       className="flex-none w-56 h-65 border rounded-lg m-4"
    //     >
    //       <a href="#" className="space-y-4">
    //         <div className="aspect-w-16 aspect-h-9">
    //           <img
    //             className="w-20 h-15 md:w-32 sm:w-32 w-fit h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12"
    //             src="/Cards/Desayuno.png"
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-4 py-2">
    //           <div className="text-lg leading-6 font-medium space-y-1">
    //             <h3 className="text-2xl font-semibold tracking-widest font-bold text-gray-800 text-2xl mb-2">
    //               Desayuno
    //             </h3>
    //           </div>
    //           <div className="text-lg">
    //             <p className="text-sm tracking-widest leading-none">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               nam
    //             </p>

    //           </div>
    //         </div>
    //       </a>
    //     </div>          

    // </div>    
    <div >
      <p className="m-6 text-2xl font-bold tracking-widest leading-none">Categorías</p>

      <div className='relative flex flex-row items-center'>
        <ArrowBackIcon onClick={slideLeft} />
        <div
          id='slider'
          className='w-[100rem] h-80px overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        > {/* Add responsivness to the slider */}
          {/* {categories.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <img
              className='w-56 h-56 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/' 
            />
            ))} */}
          {categories.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Cards cardImage={item.img} cardImageDescription={item.cardImageDescription} cardTitle={item.cardTitle} cardSubtitle={item.cardSubtitle} />
          ))}

        </div>
        <ArrowForwardIcon onClick={slideRight} />
      </div>
    </div>


  )
}

export default SliderOfCards