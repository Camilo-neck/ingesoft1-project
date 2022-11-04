import Image from "next/image"

export default function Banner() {
	const bannerStyle = {
		background: 'conic-gradient(from 182.3deg at 50% 50%, rgba(255, 255, 255, 0) -50.36deg, rgba(142, 202, 230, 0.15) 5.59deg, rgba(142, 202, 230, 0.1) 11.36deg, rgba(255, 255, 255, 0) 309.64deg, rgba(142, 202, 230, 0.15) 365.59deg)',
	}

	return (
		<div className='flex flex-col md:flex-row flex-1 items-center w-screen h-96 md:h-[29rem] backdrop-filter backdrop-blur-md drop-shadow-md absolute' style={bannerStyle}>
			<div className="flex flex-row md:flex-col 2xl:flex-row grow-0 md:grow self-center items-center pt-2">
				<div className='flex flex-row'> {/* left side - 3D images */}
					<picture>
						<source srcSet="/images/image 2.svg" type="image/svg" />
						<img src='/images/image 2.svg' alt='3d hamburguer' className='w-20 md:w-32 2xl:w-fit translate-y-0 md:translate-y-5 2xl:translate-y-12' />
					</picture>
					<picture>
						<source srcSet="/images/image 2.svg" type="image/svg" />
						<img src='/images/image 3.svg' alt='3d chaza' className='w-20 md:w-32 2xl:w-fit -translate-x-5 md:-translate-x-10 2xl:-translate-x-24 translate-y-0 md:translate-y-8 2xl:translate-y-16' />
					</picture>
				</div>
				<div className="flex flex-col grow gap-8 md:gap-16 text-center justify-center text-[#023047]"> {/* center side - text */}
					<p className="font-extrabold text-md md:text-6xl">BIENVENIDOS</p>
					<p className="font-extrabold text-md md:text-6xl">CHAZAM</p>
					<p className="font-extrabold text-md md:text-6xl"></p>
				</div>
			</div>
			<div className=""> {/* right side - flat image */}
				<picture>
					<source srcSet="/images/image 2.svg" type="image/svg" />
					<img src='/images/image 1.svg' alt='flat people eating' className='w-52 md:w-fit' />
				</picture>
			</div>
		</div>
	)
}