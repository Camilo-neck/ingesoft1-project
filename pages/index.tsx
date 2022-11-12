import type { NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import Register from './register'
import Login from './login'
const Home1: NextPage = () => {
	return (
		<Layout>
			<Login />
		</Layout>
	)
}
export default Home1
