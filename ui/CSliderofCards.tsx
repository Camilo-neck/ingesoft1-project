/* eslint-disable react/jsx-key */
import React from 'react'
import Cards from './Cards'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Ccards from './Ccards';

function CSliderOfCards({ categories, children }: {
	categories: {
		img: string;
		cardImageDescription: string;
		cardTitle: string;
		cardSubtitle: string;
	}[],
	children?: React.ReactNode
}) {
	const slideLeft = () => {
		var slider = document.getElementById('slider');
		if (slider != null) {
			slider.scrollLeft = slider?.scrollLeft - 250;
		}
	};

	const slideRight = () => {
		var slider = document.getElementById('slider');
		if (slider != null) {
			slider.scrollLeft = slider?.scrollLeft + 250;
		}
	};

	return (

		<div className='self-center'>
			<div className='relative flex flex-row items-center'>
				<ArrowBackIcon onClick={slideLeft} />
				<div
					id='slider'
					className='flex flex-row w-[17rem] sm:w-[25rem] md:w-[40rem] lg:w-[60rem] xl:w-[80rem] 2xl:w-[100rem] h-80px overflow-x-auto scroll whitespace-nowrap 
          scroll-smooth scrollbar-hide transition-all ease-in-out duration-300'
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
						<Ccards cardImage={item.img} cardImageDescription={item.cardImageDescription} cardTitle={item.cardTitle} cardSubtitle={item.cardSubtitle} />
					))}

				</div>
				<ArrowForwardIcon onClick={slideRight} />
			</div>
		</div>


	)
}

export default CSliderOfCards