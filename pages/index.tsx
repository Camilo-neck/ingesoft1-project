import type { NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import SliderOfCards from "@/ui/SliderOfCards"

const Home1: NextPage = () => {
	return (
		<Layout>
			<Banner />
      		<p className="m-6 text-2xl font-bold tracking-widest leading-none">Categorías</p>
			<SliderOfCards/>
		</Layout>
	)
}
export default Home1
