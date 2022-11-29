import type { GetServerSideProps, NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import SliderOfCards from "@/ui/SliderOfCards"
import { useState } from 'react';


const fetchCat = async () => {
	const res = await fetch('http://127.0.0.1:3000/api/categoria');
	const data = await res.json();
	console.log(data);
}
const Home = (props: {categories: any[]}) => {
	return (
		<Layout>
			<Banner />
			<p className="m-6 text-2xl font-bold tracking-widest leading-none">Categorías</p>
			<SliderOfCards categories={props.categories} />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const categories = await fetch('http://127.0.0.1:3000/api/categories')
	.then(res => res.json())
	.catch(err => console.log(err));
	console.log(categories);
	return {
		props: {
			categories
		}
	}
}

export default Home
