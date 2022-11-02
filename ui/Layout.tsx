import CNavBar from "./chazamNavBar"
import Footer from "./Footer"
import Image from "next/image"
import styles from '@/styles/Home.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<div className="">
			<CNavBar />
			<main className={styles.main}>
				{children}
			</main>
			<Footer />
		</div>
	)
}