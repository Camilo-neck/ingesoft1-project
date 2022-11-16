import type { NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import SliderOfCards from "@/ui/SliderOfCards"
import { useState } from 'react';

const categories = [
	{
	  img: '/Cards/Mercado.png',
	  cardImageDescription: "Mercado",
	  cardTitle: "Mercado",
	  cardSubtitle: "Todo lo que necesitas"
	},
	{
	  img: '/Cards/vivero.png',
	  cardImageDescription: "Vivero",
	  cardTitle: "Vivero",
	  cardSubtitle: "Ponle verde a tu vida"
	},
	{
		img: '/Cards/fastFood.png',
		cardImageDescription: "Comidas rápidas",
		cardTitle: "Comidas rápidas",
		cardSubtitle: "Delicias al instante"
	  },
	{
	  img: '/Cards/Almuerzo.png',
	  cardImageDescription: "Comida",
	  cardTitle: "Comida",
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
	  cardImageDescription: "Bisuteria",
	  cardTitle: "Bisutería",
	  cardSubtitle: "Accesorios para todos"
	},
	{
	  img: '/Cards/papeleria.png',
	  cardImageDescription: "Papeleria",
	  cardTitle: "Papeleria",
	  cardSubtitle: "Todo para un estudiante"
	},
	
	{
		img: '/Cards/random.png',
		cardImageDescription: "Otros",
		cardTitle: "Otros",
		cardSubtitle: "Cositas curiosas para ti"
	  },
	
  ]
const fetchCat = async () => {
	const res = await fetch('http://localhost:3000/api/categoria');
	const data = await res.json();
	console.log(data);
}
const Home1: NextPage = () => {
	return (
		<Layout>
			<Banner />
			<p className="m-6 text-2xl font-bold tracking-widest leading-none">Categorías</p>
			<SliderOfCards categories={categories} />
		</Layout>
	)
}

// export const getServerSideProps = async () => {
// 	const categorias = await fetch('http://127.0.0.1:5000/api/categorias')

// 	.then(res => res.json())
// 	.catch(err => console.log(err));
// 	console.log(categorias);
// 	return {
// 		props: {
// 			categorias
// 		}
// 	}
// }

export default Home1
