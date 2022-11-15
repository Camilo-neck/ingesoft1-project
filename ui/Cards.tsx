import styles from '@/styles/Home.module.css'
import Image from "next/image"
import Link from 'next/link';

export default function Cards({cardImage,cardImageDescription, cardTitle, cardSubtitle}:{cardImage: string; cardImageDescription: string;cardTitle: string; cardSubtitle: string;}) {

	return (
		
		<div className="flex-none w-56  m-4 bg-white border rounded-xl grid-row-3 border-gray-300 inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300">
			<Link href={"/chaza/?categoria="+ cardTitle}>
			<div className='grid grid-rows-2 '>
				<div className="text-center justify-center">
					<img src={cardImage} alt={cardImageDescription} className='w-[7rem] md:w-32 sm:w-28 h-fit md:translate-y-5 md:translate-x-12 translate-y-5 translate-x-12 translate-y-12' />
					
					
				</div>
				<div className="text-center justify-items-centerr">
					<p className="py-5 mt-2 text-2xl font-semibold tracking-widest leading-none"> {cardTitle}</p>
					<div className="mx-18 mb-2 w-full justify-items-center">
						<p className="text-center break-all break-word text-sm tracking-widest">{cardSubtitle}</p>
					</div>	
					
				</div>
			</div>
			
			
			</Link>
		</div>
	)
}
