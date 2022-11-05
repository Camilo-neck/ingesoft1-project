import React from 'react'
import Cards from './Cards'

function SliderOfCards() {
  return (
    <div className = "md:container md:mx-auto">
		<p className="text-2xl font-bold tracking-widest leading-none">Categorías</p>
		<Cards/>
        <Cards/>	
	</div>
  )
}

export default SliderOfCards