import styles from '@/styles/Home.module.css'
import Image from "next/image"


export default function Cards({cardImage,cardImageDescription, cardTitle, cardSubtitle}:{cardImage: string; cardImageDescription: string;cardTitle: string; cardSubtitle: string;}) {

	return (
		
		<div className="flex-none h-105 w-56  m-4 bg-white border rounded-xl grid-row-3 border-gray-300 inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300">
			<div className="text-center justify-center">
				
				<Image
					src={cardImage}
					width={200}
					height = {300}
					alt = {cardImageDescription}			
					className='w-20 h-15 md:w-32 sm:w-32 h-fit md:translate-y-5 md:translate-x-12 sm:translate-y-5 sm:translate-x-12 translate-y-12'
					/>
				
			</div>
			<div className="text-center justify-center">
				<p className="py-5 text-2xl font-semibold tracking-widest leading-none"> {cardTitle}</p>
				<div className="mx-18 m-5 h-25 w-20 text-center justify-center">
					<p className="break-all break-word text-sm tracking-widest">{cardSubtitle}</p>
				</div>	
				
			</div>
			
			
		</div>
	)
}
