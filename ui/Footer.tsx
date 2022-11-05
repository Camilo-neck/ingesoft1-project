import styles from '@/styles/Home.module.css'
import Image from "next/image"

export default function Footer() {

	return (
		<footer className={styles.footer}>
			<div className="bg-white shadow w-screen h-full flex flex-row  text-black" style={{ height: 200 }}>
				<ul>
					<li >Coffee</li>
					<li>Tea</li>
					<li>Milk</li>
				</ul>
				<ul>
					<li>Coffee</li>
					<li>Tea</li>
					<li>Milk</li>
				</ul>
				<ul>
					<li>Coffee</li>
					<li>Tea</li>
					<li>Mixxxlk</li>
				</ul>
			</div>

		</footer>
	)
}