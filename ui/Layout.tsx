import CNavBar from "./chazamNavBar"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<div className="">
			<CNavBar />
			<main className='min-h-screen pt-1 flex flex-1 flex-col'>
				{children}
			</main>
			<Footer />
		</div>
	)
}